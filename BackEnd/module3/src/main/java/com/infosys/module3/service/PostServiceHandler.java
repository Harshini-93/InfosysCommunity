package com.infosys.module3.service;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.PostInfo;
import com.infosys.module3.info.SocietyInfo;
import com.infosys.module3.microService.Module2Microservice;
import com.infosys.module3.model.Post;
import com.infosys.module3.repository.PostRepository;
import com.infosys.module3.response.PostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceHandler implements PostService{
    @Autowired
    Module2Microservice module2Microservice;
    @Autowired
    PostRepository postRepository;

    @Override
    public PostResponse addPostInfo(PostInfo postInfo, String jwt) throws Module3Exception {
        SocietyInfo society = module2Microservice.getAdminDetails(jwt);
        Post postObj = new Post();
        postObj.setTitle(postInfo.getTitle());
        postObj.setContent(postInfo.getContent());
        postObj.setPostImage(postInfo.getPostImage());
        postObj.setSocietyId(society.getSocietyId());
        Post savedPostObj = postRepository.save(postObj);
        if (savedPostObj.getPostId() != null){
            return new PostResponse(savedPostObj, "Post Created Successfully");
        }
        throw new Module3Exception("Unable to create the post");
    }

    @Override
    public List<Post> getPostList() throws Module3Exception {
        return postRepository.findAll();
    }

    @Override
    public PostResponse editPost(PostInfo postInfo, Long postId) throws Module3Exception {
        Optional<Post> postOpt = postRepository.findById(postId);
        if (postOpt.isPresent()){
            Post postObj = postOpt.get();
            if (!postObj.getTitle().equals(postInfo.getTitle())) {
                postObj.setTitle(postInfo.getTitle());
            }
            if (!postObj.getContent().equals(postInfo.getContent())) {
                postObj.setContent(postInfo.getContent());
            }
            if (!postObj.getPostImage().equals(postInfo.getPostImage())) {
                postObj.setPostImage(postInfo.getPostImage());
            }
            Post updatedPostObj = postRepository.save(postObj);
            if (updatedPostObj.getPostId() != null){
                return new PostResponse(updatedPostObj, "Post Updated Successfully");
            }
            throw new Module3Exception("Unable to update the post");
        }
        throw new Module3Exception("Unable to update the post");
    }

    @Override
    public PostResponse removePost(Long postId) throws Module3Exception {
        if (!postRepository.existsById(postId)) {
            throw new Module3Exception("Post Not Found");
        }
        postRepository.deleteById(postId);
        return new PostResponse(null, "Post Deleted Successfully");
    }

    @Override
    public Post getPost(Long postId) throws Module3Exception {
        Optional<Post> postOpt = postRepository.findById(postId);
        if (postOpt.isPresent()){
            return postOpt.get();
        }
        throw new Module3Exception("Post Not Found");
    }

    @Override
    public Post likePost(Long postId) throws Module3Exception {
        Post postObj = null;
        try {
            postObj = getPost(postId);
        } catch (Module3Exception e) {
            throw new RuntimeException(e);
        }
        postObj.setLikeCount(postObj.getLikeCount() + 1);
        return postRepository.save(postObj);
    }

    @Override
    public Post removeLike(Long postId){
        Post postObj = null;
        try {
            postObj = getPost(postId);
        } catch (Module3Exception e) {
            throw new RuntimeException(e);
        }
        postObj.setLikeCount(postObj.getLikeCount() - 1);
        return postRepository.save(postObj);
    }
}

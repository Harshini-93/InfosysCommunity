package com.infosys.module3.service;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.PostInfo;
import com.infosys.module3.model.Post;
import com.infosys.module3.response.PostResponse;

import java.util.List;

public interface PostService {
    public PostResponse addPostInfo(PostInfo postInfo, String jwt) throws Module3Exception;
    public List<Post> getPostList() throws Module3Exception;
    public PostResponse editPost(PostInfo postInfo, Long postId) throws Module3Exception;
    public PostResponse removePost(Long postId) throws Module3Exception;
    public Post getPost(Long postId) throws Module3Exception;
    public Post likePost(Long postId) throws Module3Exception;
    public Post removeLike(Long postId);
}

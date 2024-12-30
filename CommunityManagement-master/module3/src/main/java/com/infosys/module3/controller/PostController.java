package com.infosys.module3.controller;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.PostInfo;
import com.infosys.module3.model.Post;
import com.infosys.module3.response.PostResponse;
import com.infosys.module3.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/addPostInfo")
    public PostResponse addPostInfo(@RequestHeader("Authorization") String jwt, @RequestBody PostInfo postInfo) throws Module3Exception {
        return postService.addPostInfo(postInfo,jwt);
    }

    @GetMapping("/getPostList")
    public List<Post> getPostList(@RequestHeader("Authorization") String jwt) throws Module3Exception {

        return postService.getPostList();
    }

    @PutMapping("/editPost/{postId}")
    public PostResponse editPost(@RequestHeader("Authorization") String jwt,@PathVariable Long postId,@RequestBody PostInfo postInfo) throws Module3Exception {
        return postService.editPost(postInfo,postId);
    }

    @DeleteMapping("/removePost/{postId}")
    public PostResponse removePost(@RequestHeader("Authorization") String jwt,@PathVariable Long postId) throws Module3Exception {
        return postService.removePost(postId);
    }

    @PutMapping("/likePost/{postId}")
    public Post likePost(@PathVariable Long postId){
        try {
            return postService.likePost(postId);
        } catch (com.infosys.module3.exception.Module3Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/removeLike/{postId}")
    public Post removeLike(@PathVariable Long postId){
        return postService.removeLike(postId);
    }
}

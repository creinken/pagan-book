class PostsController < ApplicationController

    def index
        posts = Post.all

        render json: posts
    end

    def destroy
        post = Post.find_by(id: params[:id])
        post.destroy
        render json: { message: 'post deleted successfully'}
    end
end

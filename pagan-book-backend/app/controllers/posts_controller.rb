class PostsController < ApplicationController

    def index
        posts = Post.all

        render json: posts
    end

    def create
        post = Post.new(post_params)

        if post.save
            render json: { post: post, message: 'posted successfully'}
        else
            render json: { message: 'post failed to save'}
        end
    end

    def destroy
        post = Post.find_by(id: params[:id])
        post.destroy
        render json: { message: 'post deleted successfully'}
    end

    private

    def post_params
        params.require(:post).permit(:title, :user_id, :location_id, :content)
    end
end

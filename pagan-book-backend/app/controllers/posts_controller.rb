class PostsController < ApplicationController
	
	def index
		if params[:group_id]
            posts = Group.find(params[:group_id]).posts
        else
            posts = Post.all
        end

        render json: posts
	end

	def create
        if params[:group_id]
            group = Group.find(params[:group_id])
        else
            group = Group.find(1)
        end

        post = group.posts.build(post_params)

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
        params.require(:post).permit(:title, :user_id, :content)
    end
end

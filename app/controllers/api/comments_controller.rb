class Api::CommentsController < ApplicationController

    def index
      @comments = Comment.where(project_id: comment_params[:project_id].to_i)
      render :index
    end

    def create
      @comment = Comment.new(comment_params)
      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages, status: 401
      end
    end

    def destroy
      @comment = Comment.find_by(id: id)
      @comment.destroy
      render :index
    end

    private

    def comment_params
      params.require(:comment).permit(:title, :project_id, :user_id)
    end

end

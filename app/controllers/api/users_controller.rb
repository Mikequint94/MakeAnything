class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def search
    # debugger
    # @users = User.where("LOWER(username) LIKE ?", "%#{params[:query].downcase}%")
    @projects = Project.where("LOWER(title) LIKE ?", "%#{params[:query].downcase}%")
    render :search_index
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :img_url)
  end
end

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
    if ["cooking", "cook", "food"].include?(params[:query].downcase)
      @projects = Project.where(id: [4, 5, 9])
    elsif ["artwork", "art", "craft", "crafts"].include?(params[:query].downcase)
      @projects = Project.where(id: [6, 10, 11])
    elsif ["woodwork", "wood"].include?(params[:query].downcase)
      @projects = Project.where(id: [3])
    else
      @projects = Project.where("LOWER(title) LIKE ?", "%#{params[:query].downcase}%")
    end
    render :search_index
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :img_url)
  end
end

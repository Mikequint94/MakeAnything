class Api::ProjectsController < ApplicationController

  def index
    if params[:author_id]
      @projects = Project.where(author_id: params[:author_id])
    else
      @projects = Project.all.includes(:author)
    end
    render :index
  end

  def show
    @project = Project.find_by(id: params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end


  def update
    @project = Project.find_by(id: params[:id])
    if @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :img_url, :video_url, :description, :author_id)
  end

end

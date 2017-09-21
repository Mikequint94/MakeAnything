class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find_by(title: params[:projectName])
    render :show
  end

  def create
    @project = Project.create(project_params)
    if @project.save!
      render :show
    else
      render @project.errors.full_messages, status: 401
    end
  end


  def update
    @project = Project.update_attributes(project_params)
    if @project.save!
      render :show
    else
      render @project.errors.full_messages, status: 401
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :img_url, :video_url, :description, :author_id)
  end

end

class Api::StepsController < ApplicationController

  def index
    @steps = Step.all.where(project_id: step_params[:project_id].to_i)
    render :index
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render :show
    else
      render json: @step.errors.full_messages, status: 401
    end
  end

  def update
    # debugger
    @step = Step.find_by(id: params[:id])
    if @step.update_attributes(step_params)
      render :show
    else
      render json: @step.errors.full_messages, status: 401
    end
  end

  def destroy
    @step = Step.find_by(id: id)
    @step.destroy
    render :index
  end

  private

  def step_params
    params.require(:step).permit(:title, :img_url, :video_url, :description, :project_id, :projectId)
  end

end

class Api::StepsController < ApplicationController

  def index
    @steps = Step.all.where(project_id: step_params[:project_id].to_i)
    if @steps.length > 0
      render :index
    else
      render json: ["no steps have been created yet for this project"]
    end
  end

  def create
    @step = Step.create(step_params)
    if @step.save!
      # @steps = Step.all.where(project_id: step_params[:project_id].to_i)
      render :show
    else
      render @step.errors.full_messages, status: 401
    end
  end

  def update
    @step = Step.update_attributes(step_params)
    if @step.save!
      render :index
    else
      render @step.errors.full_messages, status: 401
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

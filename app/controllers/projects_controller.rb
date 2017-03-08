class ProjectsController < ApplicationController

  def create
    @project = Project.create(project_params)
    if @project.errors.any?
      render json: @project.errors, status: 412
    else
      render json: @project
    end
  end

  def index
    @projects = Project.all
    render json: @projects
  end

  private

    def project_params
      params.require(:project).permit(:name, :root)
    end

end

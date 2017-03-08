class ProjectsController < ApplicationController

  def create
    @project = Project.create(project_params)
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json {
        if @project.errors.any?
          render json: @project.errors, status: 412
        else
          render json: @project
        end
      }
    end
  end

  def index
    @projects = Project.all
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { render json: @projects }
    end
  end

  def show
    respond_to do |format|
      format.html { render template: 'pages/index' }
      format.json { render json: @project }
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :root)
  end

end

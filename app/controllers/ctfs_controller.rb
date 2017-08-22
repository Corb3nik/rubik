class CTFsController < ApplicationController
  def create
    @ctf = CTF.create(ctf_params)
    if @ctf.errors.any?
      render json: @ctf.errors, status: 412
    else
      render json: @ctf.as_json(include: :challenges)
    end
  end

  def index
    @ctfs = CTF.all
    render json: @ctfs
  end

  def show
    @ctf = CTF.find(params[:id])
    render json: @ctf.as_json(include: :challenges)
  end

  private

  def ctf_params
    params.require(:ctf).permit(:name, :root)
  end
end

class ChallengesController < ApplicationController
  def create
    ctf = CTF.find(params[:ctf_id])
    @challenge = ctf.challenges.create(challenge_params)
    if @challenge.errors.any?
      render json: @challenge.errors, status: 412
    else
      render json: @challenge
    end
  end

  def index
    ctf = CTF.find(params[:ctf_id])
    @challenges = ctf.challenges
    render json: @challenges
  end

  def show
    ctf = CTF.find(params[:ctf_id])
    @challenge = ctf.challenges.find(params[:id])
    render json: @challenge
  end

  private

  def challenge_params
    params.require(:challenge).permit(:name, :root)
  end
end

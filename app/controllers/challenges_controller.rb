class ChallengesController < ApplicationController
  def create
    @challenge = Challenge.create(challenge_params)
    if @challenge.errors.any?
      render json: @challenge.errors, status: 412
    else
      render json: @challenge
    end
  end

  def index
    @challenges = Challenge.all
    render json: @challenges
  end

  def show
    @challenge = Challenge.find(params[:id])
    render json: @challenge
  end

  private

  def challenge_params
    params.require(:challenge).permit(:name, :root)
  end
end

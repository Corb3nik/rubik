class ModulesController < ApplicationController
  before_action :load_params

  def dashboard
    render json: {}
  end

  private

  def load_params
    @challenge = Challenge.where(ctf_id: params[:ctf_id])
                          .find(params[:challenge_id])
  end
end

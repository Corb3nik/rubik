class CTFsController < ApplicationController
  before_action :set_ctf, only: [:show, :edit, :update, :destroy]

  # GET /ctfs
  # GET /ctfs.json
  def index
    @ctfs = Ctf.all
  end

  # GET /ctfs/1
  # GET /ctfs/1.json
  def show
  end

  # GET /ctfs/new
  def new
    @ctf = Ctf.new
  end

  # GET /ctfs/1/edit
  def edit
  end

  # POST /ctfs
  # POST /ctfs.json
  def create
    @ctf = Ctf.new(ctf_params)

    respond_to do |format|
      if @ctf.save
        format.html { redirect_to @ctf, notice: 'Ctf was successfully created.' }
        format.json { render :show, status: :created, location: @ctf }
      else
        format.html { render :new }
        format.json { render json: @ctf.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ctfs/1
  # PATCH/PUT /ctfs/1.json
  def update
    respond_to do |format|
      if @ctf.update(ctf_params)
        format.html { redirect_to @ctf, notice: 'Ctf was successfully updated.' }
        format.json { render :show, status: :ok, location: @ctf }
      else
        format.html { render :edit }
        format.json { render json: @ctf.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ctfs/1
  # DELETE /ctfs/1.json
  def destroy
    @ctf.destroy
    respond_to do |format|
      format.html { redirect_to ctfs_url, notice: 'Ctf was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ctf
      @ctf = Ctf.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ctf_params
      params.require(:ctf).permit(:name)
    end
end

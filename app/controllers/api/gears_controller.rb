class Api::GearsController < ApplicationController
  before_action :set_kit
  before_action :set_gear, only: [:show, :update, :destroy]

  def index 
    render json: @kit.gears
  end

  def show
    render json: @gear
  end

  def create 
    @gear = @kit.gears.new(gear_params)
    if @gear.save
      render json: @gear
    else
      render json: { errors: @gear.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @gear.update(gear_params)
      render json: @gear
    else
      render json: { errors: @gear.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @gear.destroy
    render json: { message: "Gear deleted" }
  end

  private
    def gear_params
      params.require(:gear).permit(:name, :desc, :image, :price, :model, :condition, :make, :serial,  :bought, :quantity)
    end

    def set_kit
      @kit = Kit.find(params[:kit_id])
    end

    def set_gear
      @gear = @kit.gears.find(params[:id])
    end
end

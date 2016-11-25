class SchooldetailsController < ApplicationController
   # before_action :set_schooldetail, only: [:show, :edit, :update, :destroy]
  def index
    @schooldetails = Schooldetail.all
  end

  def new
    @schooldetail = Schooldetail.new
  end

  def show
     @schooldetail = Schooldetail.find(params[:id])
  end

  def create
     @schooldetail = Schooldetail.new(schooldetail_params)
     p @schooldetail
     if @schooldetail.save
     p "success"
         redirect_to @schooldetail

     else 
       p "error"
      render :new
    end

  end

  def edit
    @schooldetail = Schooldetail.find(params[:id])
  end

  def update
      @schooldetail = Schooldetail.find(params[:id])
      if @schooldetail.update(schooldetail_params)
        p @schooldetail
        p "update"
         redirect_to @schooldetail
        else
          p "updateerror"
         render :edit 
      end
  end

  def destroy
    @schooldetail = Schooldetail.find(params[:id])
        @schooldetail.destroy
        redirect_to schooldetails_url
  end

  
  private
  def schooldetail_params
    params.require(:schooldetail).permit(:schoolname, :address,:city,:state,:pincode,:affiliatedboard)
  end 
end

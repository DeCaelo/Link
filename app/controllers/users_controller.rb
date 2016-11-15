class UsersController < ApplicationController
  before_action :set_user, only: [ :profile, :edit ,:update, :destroy ]

  def profile
  end

  def edit
  end

  def update
    @user = User.find(current_user)
    if @user.update_attributes(user_params)
      redirect_to profile_path
    else
      render 'edit'
    end
  end

  def destroy
    @user.destroy
    if @user.destroy
      redirect_to root_url, notice: "User deleted."
    else
      render 'profile'
    end
  end

  private
  def set_user
    @user = current_user
  end

  def user_params
   params.require(:user).permit(:email, :avatar)

  end
end

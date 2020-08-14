class ChangePostsLocationIdToGroupId < ActiveRecord::Migration[6.0]
  def change
      rename_column :posts, :location_id, :group_id
  end
end

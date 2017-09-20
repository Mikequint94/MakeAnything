class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null:false
      t.string :img_url
      t.string :video_url
      t.string :description, null:false
      t.integer :author_id
      
      t.timestamps
    end
  end
end

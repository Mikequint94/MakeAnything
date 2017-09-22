class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title, null:false
      t.string :img_url
      t.string :video_url
      t.string :description, null:false
      t.integer :project_id

      t.timestamps
    end

    add_index :steps, :project_id
  end
end

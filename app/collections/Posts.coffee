define(
  ['backbone', 'jquery', '../../models/compiled/Post'],
  (Backbone, $, Post)  ->
    class Client extends Backbone.Collection
      model: Post

)
define(
  ['backbone', 'jquery'],
  (Backbone, $)  ->
    class Client extends Backbone.Model
      defaults:
        title: 'Post Title',
        content: 'Post Content'
)
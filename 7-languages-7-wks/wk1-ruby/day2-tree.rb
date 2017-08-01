class Tree
  attr_accessor :children, :node_name

  def initialize(name, children=[])
    @node_name = name
    @children = children
  end

  def visit_all(&block)
    visit &block
    children.each {|child| child.visit_all &block}
  end

  def visit(&block)
    block.call self
  end
end

ruby_tree = Tree.new( "Ruby",[
    Tree.new("Reia"),
    Tree.new("MacRuby", [
        Tree.new("babyTree")
      ]
    )
  ]
)

puts "visiting a node"
ruby_tree.visit {|node| puts node.node_name}
puts
puts "visiting entire tree"
ruby_tree.visit_all {|node| puts node.node_name}

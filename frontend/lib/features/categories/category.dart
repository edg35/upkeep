class Category {
  const Category({required this.id, required this.name, this.color});

  final String id;
  final String name;
  final String? color;

  factory Category.fromJson(Map<String, dynamic> json) {
    return Category(
      id: json['category_id'] as String,
      name: json['name'] as String,
      color: json['color'] as String?,
    );
  }
}

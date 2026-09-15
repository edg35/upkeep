// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_database.dart';

// ignore_for_file: type=lint
class $LocalItemsTable extends LocalItems
    with TableInfo<$LocalItemsTable, LocalItem> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $LocalItemsTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _itemIdMeta = const VerificationMeta('itemId');
  @override
  late final GeneratedColumn<String> itemId = GeneratedColumn<String>(
    'item_id',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
    'name',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _itemTypeMeta = const VerificationMeta(
    'itemType',
  );
  @override
  late final GeneratedColumn<String> itemType = GeneratedColumn<String>(
    'item_type',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _categoryIdMeta = const VerificationMeta(
    'categoryId',
  );
  @override
  late final GeneratedColumn<String> categoryId = GeneratedColumn<String>(
    'category_id',
    aliasedName,
    true,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
  );
  static const VerificationMeta _categoryColorMeta = const VerificationMeta(
    'categoryColor',
  );
  @override
  late final GeneratedColumn<String> categoryColor = GeneratedColumn<String>(
    'category_color',
    aliasedName,
    true,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
  );
  static const VerificationMeta _purchaseLinkMeta = const VerificationMeta(
    'purchaseLink',
  );
  @override
  late final GeneratedColumn<String> purchaseLink = GeneratedColumn<String>(
    'purchase_link',
    aliasedName,
    true,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
  );
  static const VerificationMeta _trackingModeMeta = const VerificationMeta(
    'trackingMode',
  );
  @override
  late final GeneratedColumn<String> trackingMode = GeneratedColumn<String>(
    'tracking_mode',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _nextDueDateMeta = const VerificationMeta(
    'nextDueDate',
  );
  @override
  late final GeneratedColumn<DateTime> nextDueDate = GeneratedColumn<DateTime>(
    'next_due_date',
    aliasedName,
    false,
    type: DriftSqlType.dateTime,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _lastCompletedAtMeta = const VerificationMeta(
    'lastCompletedAt',
  );
  @override
  late final GeneratedColumn<DateTime> lastCompletedAt =
      GeneratedColumn<DateTime>(
        'last_completed_at',
        aliasedName,
        true,
        type: DriftSqlType.dateTime,
        requiredDuringInsert: false,
      );
  static const VerificationMeta _lastCompletedByNameMeta =
      const VerificationMeta('lastCompletedByName');
  @override
  late final GeneratedColumn<String> lastCompletedByName =
      GeneratedColumn<String>(
        'last_completed_by_name',
        aliasedName,
        true,
        type: DriftSqlType.string,
        requiredDuringInsert: false,
      );
  static const VerificationMeta _updatedAtMeta = const VerificationMeta(
    'updatedAt',
  );
  @override
  late final GeneratedColumn<DateTime> updatedAt = GeneratedColumn<DateTime>(
    'updated_at',
    aliasedName,
    true,
    type: DriftSqlType.dateTime,
    requiredDuringInsert: false,
  );
  @override
  List<GeneratedColumn> get $columns => [
    itemId,
    name,
    itemType,
    categoryId,
    categoryColor,
    purchaseLink,
    trackingMode,
    nextDueDate,
    lastCompletedAt,
    lastCompletedByName,
    updatedAt,
  ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'local_items';
  @override
  VerificationContext validateIntegrity(
    Insertable<LocalItem> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('item_id')) {
      context.handle(
        _itemIdMeta,
        itemId.isAcceptableOrUnknown(data['item_id']!, _itemIdMeta),
      );
    } else if (isInserting) {
      context.missing(_itemIdMeta);
    }
    if (data.containsKey('name')) {
      context.handle(
        _nameMeta,
        name.isAcceptableOrUnknown(data['name']!, _nameMeta),
      );
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('item_type')) {
      context.handle(
        _itemTypeMeta,
        itemType.isAcceptableOrUnknown(data['item_type']!, _itemTypeMeta),
      );
    } else if (isInserting) {
      context.missing(_itemTypeMeta);
    }
    if (data.containsKey('category_id')) {
      context.handle(
        _categoryIdMeta,
        categoryId.isAcceptableOrUnknown(data['category_id']!, _categoryIdMeta),
      );
    }
    if (data.containsKey('category_color')) {
      context.handle(
        _categoryColorMeta,
        categoryColor.isAcceptableOrUnknown(
          data['category_color']!,
          _categoryColorMeta,
        ),
      );
    }
    if (data.containsKey('purchase_link')) {
      context.handle(
        _purchaseLinkMeta,
        purchaseLink.isAcceptableOrUnknown(
          data['purchase_link']!,
          _purchaseLinkMeta,
        ),
      );
    }
    if (data.containsKey('tracking_mode')) {
      context.handle(
        _trackingModeMeta,
        trackingMode.isAcceptableOrUnknown(
          data['tracking_mode']!,
          _trackingModeMeta,
        ),
      );
    } else if (isInserting) {
      context.missing(_trackingModeMeta);
    }
    if (data.containsKey('next_due_date')) {
      context.handle(
        _nextDueDateMeta,
        nextDueDate.isAcceptableOrUnknown(
          data['next_due_date']!,
          _nextDueDateMeta,
        ),
      );
    } else if (isInserting) {
      context.missing(_nextDueDateMeta);
    }
    if (data.containsKey('last_completed_at')) {
      context.handle(
        _lastCompletedAtMeta,
        lastCompletedAt.isAcceptableOrUnknown(
          data['last_completed_at']!,
          _lastCompletedAtMeta,
        ),
      );
    }
    if (data.containsKey('last_completed_by_name')) {
      context.handle(
        _lastCompletedByNameMeta,
        lastCompletedByName.isAcceptableOrUnknown(
          data['last_completed_by_name']!,
          _lastCompletedByNameMeta,
        ),
      );
    }
    if (data.containsKey('updated_at')) {
      context.handle(
        _updatedAtMeta,
        updatedAt.isAcceptableOrUnknown(data['updated_at']!, _updatedAtMeta),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {itemId};
  @override
  LocalItem map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return LocalItem(
      itemId: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}item_id'],
      )!,
      name: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}name'],
      )!,
      itemType: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}item_type'],
      )!,
      categoryId: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}category_id'],
      ),
      categoryColor: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}category_color'],
      ),
      purchaseLink: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}purchase_link'],
      ),
      trackingMode: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}tracking_mode'],
      )!,
      nextDueDate: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}next_due_date'],
      )!,
      lastCompletedAt: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}last_completed_at'],
      ),
      lastCompletedByName: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}last_completed_by_name'],
      ),
      updatedAt: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}updated_at'],
      ),
    );
  }

  @override
  $LocalItemsTable createAlias(String alias) {
    return $LocalItemsTable(attachedDatabase, alias);
  }
}

class LocalItem extends DataClass implements Insertable<LocalItem> {
  final String itemId;
  final String name;
  final String itemType;
  final String? categoryId;
  final String? categoryColor;
  final String? purchaseLink;
  final String trackingMode;
  final DateTime nextDueDate;
  final DateTime? lastCompletedAt;
  final String? lastCompletedByName;

  /// The server's `updated_at`. Null while the row is a locally-created item
  /// still waiting on its `create` mutation to be acknowledged.
  final DateTime? updatedAt;
  const LocalItem({
    required this.itemId,
    required this.name,
    required this.itemType,
    this.categoryId,
    this.categoryColor,
    this.purchaseLink,
    required this.trackingMode,
    required this.nextDueDate,
    this.lastCompletedAt,
    this.lastCompletedByName,
    this.updatedAt,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['item_id'] = Variable<String>(itemId);
    map['name'] = Variable<String>(name);
    map['item_type'] = Variable<String>(itemType);
    if (!nullToAbsent || categoryId != null) {
      map['category_id'] = Variable<String>(categoryId);
    }
    if (!nullToAbsent || categoryColor != null) {
      map['category_color'] = Variable<String>(categoryColor);
    }
    if (!nullToAbsent || purchaseLink != null) {
      map['purchase_link'] = Variable<String>(purchaseLink);
    }
    map['tracking_mode'] = Variable<String>(trackingMode);
    map['next_due_date'] = Variable<DateTime>(nextDueDate);
    if (!nullToAbsent || lastCompletedAt != null) {
      map['last_completed_at'] = Variable<DateTime>(lastCompletedAt);
    }
    if (!nullToAbsent || lastCompletedByName != null) {
      map['last_completed_by_name'] = Variable<String>(lastCompletedByName);
    }
    if (!nullToAbsent || updatedAt != null) {
      map['updated_at'] = Variable<DateTime>(updatedAt);
    }
    return map;
  }

  LocalItemsCompanion toCompanion(bool nullToAbsent) {
    return LocalItemsCompanion(
      itemId: Value(itemId),
      name: Value(name),
      itemType: Value(itemType),
      categoryId: categoryId == null && nullToAbsent
          ? const Value.absent()
          : Value(categoryId),
      categoryColor: categoryColor == null && nullToAbsent
          ? const Value.absent()
          : Value(categoryColor),
      purchaseLink: purchaseLink == null && nullToAbsent
          ? const Value.absent()
          : Value(purchaseLink),
      trackingMode: Value(trackingMode),
      nextDueDate: Value(nextDueDate),
      lastCompletedAt: lastCompletedAt == null && nullToAbsent
          ? const Value.absent()
          : Value(lastCompletedAt),
      lastCompletedByName: lastCompletedByName == null && nullToAbsent
          ? const Value.absent()
          : Value(lastCompletedByName),
      updatedAt: updatedAt == null && nullToAbsent
          ? const Value.absent()
          : Value(updatedAt),
    );
  }

  factory LocalItem.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return LocalItem(
      itemId: serializer.fromJson<String>(json['itemId']),
      name: serializer.fromJson<String>(json['name']),
      itemType: serializer.fromJson<String>(json['itemType']),
      categoryId: serializer.fromJson<String?>(json['categoryId']),
      categoryColor: serializer.fromJson<String?>(json['categoryColor']),
      purchaseLink: serializer.fromJson<String?>(json['purchaseLink']),
      trackingMode: serializer.fromJson<String>(json['trackingMode']),
      nextDueDate: serializer.fromJson<DateTime>(json['nextDueDate']),
      lastCompletedAt: serializer.fromJson<DateTime?>(json['lastCompletedAt']),
      lastCompletedByName: serializer.fromJson<String?>(
        json['lastCompletedByName'],
      ),
      updatedAt: serializer.fromJson<DateTime?>(json['updatedAt']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'itemId': serializer.toJson<String>(itemId),
      'name': serializer.toJson<String>(name),
      'itemType': serializer.toJson<String>(itemType),
      'categoryId': serializer.toJson<String?>(categoryId),
      'categoryColor': serializer.toJson<String?>(categoryColor),
      'purchaseLink': serializer.toJson<String?>(purchaseLink),
      'trackingMode': serializer.toJson<String>(trackingMode),
      'nextDueDate': serializer.toJson<DateTime>(nextDueDate),
      'lastCompletedAt': serializer.toJson<DateTime?>(lastCompletedAt),
      'lastCompletedByName': serializer.toJson<String?>(lastCompletedByName),
      'updatedAt': serializer.toJson<DateTime?>(updatedAt),
    };
  }

  LocalItem copyWith({
    String? itemId,
    String? name,
    String? itemType,
    Value<String?> categoryId = const Value.absent(),
    Value<String?> categoryColor = const Value.absent(),
    Value<String?> purchaseLink = const Value.absent(),
    String? trackingMode,
    DateTime? nextDueDate,
    Value<DateTime?> lastCompletedAt = const Value.absent(),
    Value<String?> lastCompletedByName = const Value.absent(),
    Value<DateTime?> updatedAt = const Value.absent(),
  }) => LocalItem(
    itemId: itemId ?? this.itemId,
    name: name ?? this.name,
    itemType: itemType ?? this.itemType,
    categoryId: categoryId.present ? categoryId.value : this.categoryId,
    categoryColor: categoryColor.present
        ? categoryColor.value
        : this.categoryColor,
    purchaseLink: purchaseLink.present ? purchaseLink.value : this.purchaseLink,
    trackingMode: trackingMode ?? this.trackingMode,
    nextDueDate: nextDueDate ?? this.nextDueDate,
    lastCompletedAt: lastCompletedAt.present
        ? lastCompletedAt.value
        : this.lastCompletedAt,
    lastCompletedByName: lastCompletedByName.present
        ? lastCompletedByName.value
        : this.lastCompletedByName,
    updatedAt: updatedAt.present ? updatedAt.value : this.updatedAt,
  );
  LocalItem copyWithCompanion(LocalItemsCompanion data) {
    return LocalItem(
      itemId: data.itemId.present ? data.itemId.value : this.itemId,
      name: data.name.present ? data.name.value : this.name,
      itemType: data.itemType.present ? data.itemType.value : this.itemType,
      categoryId: data.categoryId.present
          ? data.categoryId.value
          : this.categoryId,
      categoryColor: data.categoryColor.present
          ? data.categoryColor.value
          : this.categoryColor,
      purchaseLink: data.purchaseLink.present
          ? data.purchaseLink.value
          : this.purchaseLink,
      trackingMode: data.trackingMode.present
          ? data.trackingMode.value
          : this.trackingMode,
      nextDueDate: data.nextDueDate.present
          ? data.nextDueDate.value
          : this.nextDueDate,
      lastCompletedAt: data.lastCompletedAt.present
          ? data.lastCompletedAt.value
          : this.lastCompletedAt,
      lastCompletedByName: data.lastCompletedByName.present
          ? data.lastCompletedByName.value
          : this.lastCompletedByName,
      updatedAt: data.updatedAt.present ? data.updatedAt.value : this.updatedAt,
    );
  }

  @override
  String toString() {
    return (StringBuffer('LocalItem(')
          ..write('itemId: $itemId, ')
          ..write('name: $name, ')
          ..write('itemType: $itemType, ')
          ..write('categoryId: $categoryId, ')
          ..write('categoryColor: $categoryColor, ')
          ..write('purchaseLink: $purchaseLink, ')
          ..write('trackingMode: $trackingMode, ')
          ..write('nextDueDate: $nextDueDate, ')
          ..write('lastCompletedAt: $lastCompletedAt, ')
          ..write('lastCompletedByName: $lastCompletedByName, ')
          ..write('updatedAt: $updatedAt')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(
    itemId,
    name,
    itemType,
    categoryId,
    categoryColor,
    purchaseLink,
    trackingMode,
    nextDueDate,
    lastCompletedAt,
    lastCompletedByName,
    updatedAt,
  );
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is LocalItem &&
          other.itemId == this.itemId &&
          other.name == this.name &&
          other.itemType == this.itemType &&
          other.categoryId == this.categoryId &&
          other.categoryColor == this.categoryColor &&
          other.purchaseLink == this.purchaseLink &&
          other.trackingMode == this.trackingMode &&
          other.nextDueDate == this.nextDueDate &&
          other.lastCompletedAt == this.lastCompletedAt &&
          other.lastCompletedByName == this.lastCompletedByName &&
          other.updatedAt == this.updatedAt);
}

class LocalItemsCompanion extends UpdateCompanion<LocalItem> {
  final Value<String> itemId;
  final Value<String> name;
  final Value<String> itemType;
  final Value<String?> categoryId;
  final Value<String?> categoryColor;
  final Value<String?> purchaseLink;
  final Value<String> trackingMode;
  final Value<DateTime> nextDueDate;
  final Value<DateTime?> lastCompletedAt;
  final Value<String?> lastCompletedByName;
  final Value<DateTime?> updatedAt;
  final Value<int> rowid;
  const LocalItemsCompanion({
    this.itemId = const Value.absent(),
    this.name = const Value.absent(),
    this.itemType = const Value.absent(),
    this.categoryId = const Value.absent(),
    this.categoryColor = const Value.absent(),
    this.purchaseLink = const Value.absent(),
    this.trackingMode = const Value.absent(),
    this.nextDueDate = const Value.absent(),
    this.lastCompletedAt = const Value.absent(),
    this.lastCompletedByName = const Value.absent(),
    this.updatedAt = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  LocalItemsCompanion.insert({
    required String itemId,
    required String name,
    required String itemType,
    this.categoryId = const Value.absent(),
    this.categoryColor = const Value.absent(),
    this.purchaseLink = const Value.absent(),
    required String trackingMode,
    required DateTime nextDueDate,
    this.lastCompletedAt = const Value.absent(),
    this.lastCompletedByName = const Value.absent(),
    this.updatedAt = const Value.absent(),
    this.rowid = const Value.absent(),
  }) : itemId = Value(itemId),
       name = Value(name),
       itemType = Value(itemType),
       trackingMode = Value(trackingMode),
       nextDueDate = Value(nextDueDate);
  static Insertable<LocalItem> custom({
    Expression<String>? itemId,
    Expression<String>? name,
    Expression<String>? itemType,
    Expression<String>? categoryId,
    Expression<String>? categoryColor,
    Expression<String>? purchaseLink,
    Expression<String>? trackingMode,
    Expression<DateTime>? nextDueDate,
    Expression<DateTime>? lastCompletedAt,
    Expression<String>? lastCompletedByName,
    Expression<DateTime>? updatedAt,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (itemId != null) 'item_id': itemId,
      if (name != null) 'name': name,
      if (itemType != null) 'item_type': itemType,
      if (categoryId != null) 'category_id': categoryId,
      if (categoryColor != null) 'category_color': categoryColor,
      if (purchaseLink != null) 'purchase_link': purchaseLink,
      if (trackingMode != null) 'tracking_mode': trackingMode,
      if (nextDueDate != null) 'next_due_date': nextDueDate,
      if (lastCompletedAt != null) 'last_completed_at': lastCompletedAt,
      if (lastCompletedByName != null)
        'last_completed_by_name': lastCompletedByName,
      if (updatedAt != null) 'updated_at': updatedAt,
      if (rowid != null) 'rowid': rowid,
    });
  }

  LocalItemsCompanion copyWith({
    Value<String>? itemId,
    Value<String>? name,
    Value<String>? itemType,
    Value<String?>? categoryId,
    Value<String?>? categoryColor,
    Value<String?>? purchaseLink,
    Value<String>? trackingMode,
    Value<DateTime>? nextDueDate,
    Value<DateTime?>? lastCompletedAt,
    Value<String?>? lastCompletedByName,
    Value<DateTime?>? updatedAt,
    Value<int>? rowid,
  }) {
    return LocalItemsCompanion(
      itemId: itemId ?? this.itemId,
      name: name ?? this.name,
      itemType: itemType ?? this.itemType,
      categoryId: categoryId ?? this.categoryId,
      categoryColor: categoryColor ?? this.categoryColor,
      purchaseLink: purchaseLink ?? this.purchaseLink,
      trackingMode: trackingMode ?? this.trackingMode,
      nextDueDate: nextDueDate ?? this.nextDueDate,
      lastCompletedAt: lastCompletedAt ?? this.lastCompletedAt,
      lastCompletedByName: lastCompletedByName ?? this.lastCompletedByName,
      updatedAt: updatedAt ?? this.updatedAt,
      rowid: rowid ?? this.rowid,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (itemId.present) {
      map['item_id'] = Variable<String>(itemId.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (itemType.present) {
      map['item_type'] = Variable<String>(itemType.value);
    }
    if (categoryId.present) {
      map['category_id'] = Variable<String>(categoryId.value);
    }
    if (categoryColor.present) {
      map['category_color'] = Variable<String>(categoryColor.value);
    }
    if (purchaseLink.present) {
      map['purchase_link'] = Variable<String>(purchaseLink.value);
    }
    if (trackingMode.present) {
      map['tracking_mode'] = Variable<String>(trackingMode.value);
    }
    if (nextDueDate.present) {
      map['next_due_date'] = Variable<DateTime>(nextDueDate.value);
    }
    if (lastCompletedAt.present) {
      map['last_completed_at'] = Variable<DateTime>(lastCompletedAt.value);
    }
    if (lastCompletedByName.present) {
      map['last_completed_by_name'] = Variable<String>(
        lastCompletedByName.value,
      );
    }
    if (updatedAt.present) {
      map['updated_at'] = Variable<DateTime>(updatedAt.value);
    }
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('LocalItemsCompanion(')
          ..write('itemId: $itemId, ')
          ..write('name: $name, ')
          ..write('itemType: $itemType, ')
          ..write('categoryId: $categoryId, ')
          ..write('categoryColor: $categoryColor, ')
          ..write('purchaseLink: $purchaseLink, ')
          ..write('trackingMode: $trackingMode, ')
          ..write('nextDueDate: $nextDueDate, ')
          ..write('lastCompletedAt: $lastCompletedAt, ')
          ..write('lastCompletedByName: $lastCompletedByName, ')
          ..write('updatedAt: $updatedAt, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

class $LocalCategoriesTable extends LocalCategories
    with TableInfo<$LocalCategoriesTable, LocalCategory> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $LocalCategoriesTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _categoryIdMeta = const VerificationMeta(
    'categoryId',
  );
  @override
  late final GeneratedColumn<String> categoryId = GeneratedColumn<String>(
    'category_id',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
    'name',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _colorMeta = const VerificationMeta('color');
  @override
  late final GeneratedColumn<String> color = GeneratedColumn<String>(
    'color',
    aliasedName,
    true,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
  );
  @override
  List<GeneratedColumn> get $columns => [categoryId, name, color];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'local_categories';
  @override
  VerificationContext validateIntegrity(
    Insertable<LocalCategory> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('category_id')) {
      context.handle(
        _categoryIdMeta,
        categoryId.isAcceptableOrUnknown(data['category_id']!, _categoryIdMeta),
      );
    } else if (isInserting) {
      context.missing(_categoryIdMeta);
    }
    if (data.containsKey('name')) {
      context.handle(
        _nameMeta,
        name.isAcceptableOrUnknown(data['name']!, _nameMeta),
      );
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('color')) {
      context.handle(
        _colorMeta,
        color.isAcceptableOrUnknown(data['color']!, _colorMeta),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {categoryId};
  @override
  LocalCategory map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return LocalCategory(
      categoryId: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}category_id'],
      )!,
      name: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}name'],
      )!,
      color: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}color'],
      ),
    );
  }

  @override
  $LocalCategoriesTable createAlias(String alias) {
    return $LocalCategoriesTable(attachedDatabase, alias);
  }
}

class LocalCategory extends DataClass implements Insertable<LocalCategory> {
  final String categoryId;
  final String name;
  final String? color;
  const LocalCategory({
    required this.categoryId,
    required this.name,
    this.color,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['category_id'] = Variable<String>(categoryId);
    map['name'] = Variable<String>(name);
    if (!nullToAbsent || color != null) {
      map['color'] = Variable<String>(color);
    }
    return map;
  }

  LocalCategoriesCompanion toCompanion(bool nullToAbsent) {
    return LocalCategoriesCompanion(
      categoryId: Value(categoryId),
      name: Value(name),
      color: color == null && nullToAbsent
          ? const Value.absent()
          : Value(color),
    );
  }

  factory LocalCategory.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return LocalCategory(
      categoryId: serializer.fromJson<String>(json['categoryId']),
      name: serializer.fromJson<String>(json['name']),
      color: serializer.fromJson<String?>(json['color']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'categoryId': serializer.toJson<String>(categoryId),
      'name': serializer.toJson<String>(name),
      'color': serializer.toJson<String?>(color),
    };
  }

  LocalCategory copyWith({
    String? categoryId,
    String? name,
    Value<String?> color = const Value.absent(),
  }) => LocalCategory(
    categoryId: categoryId ?? this.categoryId,
    name: name ?? this.name,
    color: color.present ? color.value : this.color,
  );
  LocalCategory copyWithCompanion(LocalCategoriesCompanion data) {
    return LocalCategory(
      categoryId: data.categoryId.present
          ? data.categoryId.value
          : this.categoryId,
      name: data.name.present ? data.name.value : this.name,
      color: data.color.present ? data.color.value : this.color,
    );
  }

  @override
  String toString() {
    return (StringBuffer('LocalCategory(')
          ..write('categoryId: $categoryId, ')
          ..write('name: $name, ')
          ..write('color: $color')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(categoryId, name, color);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is LocalCategory &&
          other.categoryId == this.categoryId &&
          other.name == this.name &&
          other.color == this.color);
}

class LocalCategoriesCompanion extends UpdateCompanion<LocalCategory> {
  final Value<String> categoryId;
  final Value<String> name;
  final Value<String?> color;
  final Value<int> rowid;
  const LocalCategoriesCompanion({
    this.categoryId = const Value.absent(),
    this.name = const Value.absent(),
    this.color = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  LocalCategoriesCompanion.insert({
    required String categoryId,
    required String name,
    this.color = const Value.absent(),
    this.rowid = const Value.absent(),
  }) : categoryId = Value(categoryId),
       name = Value(name);
  static Insertable<LocalCategory> custom({
    Expression<String>? categoryId,
    Expression<String>? name,
    Expression<String>? color,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (categoryId != null) 'category_id': categoryId,
      if (name != null) 'name': name,
      if (color != null) 'color': color,
      if (rowid != null) 'rowid': rowid,
    });
  }

  LocalCategoriesCompanion copyWith({
    Value<String>? categoryId,
    Value<String>? name,
    Value<String?>? color,
    Value<int>? rowid,
  }) {
    return LocalCategoriesCompanion(
      categoryId: categoryId ?? this.categoryId,
      name: name ?? this.name,
      color: color ?? this.color,
      rowid: rowid ?? this.rowid,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (categoryId.present) {
      map['category_id'] = Variable<String>(categoryId.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (color.present) {
      map['color'] = Variable<String>(color.value);
    }
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('LocalCategoriesCompanion(')
          ..write('categoryId: $categoryId, ')
          ..write('name: $name, ')
          ..write('color: $color, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

class $OutboxMutationsTable extends OutboxMutations
    with TableInfo<$OutboxMutationsTable, OutboxMutation> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $OutboxMutationsTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
    'id',
    aliasedName,
    false,
    hasAutoIncrement: true,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultConstraints: GeneratedColumn.constraintIsAlways(
      'PRIMARY KEY AUTOINCREMENT',
    ),
  );
  static const VerificationMeta _itemIdMeta = const VerificationMeta('itemId');
  @override
  late final GeneratedColumn<String> itemId = GeneratedColumn<String>(
    'item_id',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  @override
  late final GeneratedColumnWithTypeConverter<OutboxMutationType, String> type =
      GeneratedColumn<String>(
        'type',
        aliasedName,
        false,
        type: DriftSqlType.string,
        requiredDuringInsert: true,
      ).withConverter<OutboxMutationType>($OutboxMutationsTable.$convertertype);
  static const VerificationMeta _payloadJsonMeta = const VerificationMeta(
    'payloadJson',
  );
  @override
  late final GeneratedColumn<String> payloadJson = GeneratedColumn<String>(
    'payload_json',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _createdAtMeta = const VerificationMeta(
    'createdAt',
  );
  @override
  late final GeneratedColumn<DateTime> createdAt = GeneratedColumn<DateTime>(
    'created_at',
    aliasedName,
    false,
    type: DriftSqlType.dateTime,
    requiredDuringInsert: false,
    defaultValue: currentDateAndTime,
  );
  @override
  List<GeneratedColumn> get $columns => [
    id,
    itemId,
    type,
    payloadJson,
    createdAt,
  ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'outbox_mutations';
  @override
  VerificationContext validateIntegrity(
    Insertable<OutboxMutation> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('item_id')) {
      context.handle(
        _itemIdMeta,
        itemId.isAcceptableOrUnknown(data['item_id']!, _itemIdMeta),
      );
    } else if (isInserting) {
      context.missing(_itemIdMeta);
    }
    if (data.containsKey('payload_json')) {
      context.handle(
        _payloadJsonMeta,
        payloadJson.isAcceptableOrUnknown(
          data['payload_json']!,
          _payloadJsonMeta,
        ),
      );
    } else if (isInserting) {
      context.missing(_payloadJsonMeta);
    }
    if (data.containsKey('created_at')) {
      context.handle(
        _createdAtMeta,
        createdAt.isAcceptableOrUnknown(data['created_at']!, _createdAtMeta),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  OutboxMutation map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return OutboxMutation(
      id: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}id'],
      )!,
      itemId: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}item_id'],
      )!,
      type: $OutboxMutationsTable.$convertertype.fromSql(
        attachedDatabase.typeMapping.read(
          DriftSqlType.string,
          data['${effectivePrefix}type'],
        )!,
      ),
      payloadJson: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}payload_json'],
      )!,
      createdAt: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}created_at'],
      )!,
    );
  }

  @override
  $OutboxMutationsTable createAlias(String alias) {
    return $OutboxMutationsTable(attachedDatabase, alias);
  }

  static JsonTypeConverter2<OutboxMutationType, String, String> $convertertype =
      const EnumNameConverter<OutboxMutationType>(OutboxMutationType.values);
}

class OutboxMutation extends DataClass implements Insertable<OutboxMutation> {
  final int id;
  final String itemId;
  final OutboxMutationType type;

  /// The exact request body to send, as JSON — for `delete`/`complete`
  /// (no body needed) this is `'{}'`.
  final String payloadJson;
  final DateTime createdAt;
  const OutboxMutation({
    required this.id,
    required this.itemId,
    required this.type,
    required this.payloadJson,
    required this.createdAt,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['item_id'] = Variable<String>(itemId);
    {
      map['type'] = Variable<String>(
        $OutboxMutationsTable.$convertertype.toSql(type),
      );
    }
    map['payload_json'] = Variable<String>(payloadJson);
    map['created_at'] = Variable<DateTime>(createdAt);
    return map;
  }

  OutboxMutationsCompanion toCompanion(bool nullToAbsent) {
    return OutboxMutationsCompanion(
      id: Value(id),
      itemId: Value(itemId),
      type: Value(type),
      payloadJson: Value(payloadJson),
      createdAt: Value(createdAt),
    );
  }

  factory OutboxMutation.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return OutboxMutation(
      id: serializer.fromJson<int>(json['id']),
      itemId: serializer.fromJson<String>(json['itemId']),
      type: $OutboxMutationsTable.$convertertype.fromJson(
        serializer.fromJson<String>(json['type']),
      ),
      payloadJson: serializer.fromJson<String>(json['payloadJson']),
      createdAt: serializer.fromJson<DateTime>(json['createdAt']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'itemId': serializer.toJson<String>(itemId),
      'type': serializer.toJson<String>(
        $OutboxMutationsTable.$convertertype.toJson(type),
      ),
      'payloadJson': serializer.toJson<String>(payloadJson),
      'createdAt': serializer.toJson<DateTime>(createdAt),
    };
  }

  OutboxMutation copyWith({
    int? id,
    String? itemId,
    OutboxMutationType? type,
    String? payloadJson,
    DateTime? createdAt,
  }) => OutboxMutation(
    id: id ?? this.id,
    itemId: itemId ?? this.itemId,
    type: type ?? this.type,
    payloadJson: payloadJson ?? this.payloadJson,
    createdAt: createdAt ?? this.createdAt,
  );
  OutboxMutation copyWithCompanion(OutboxMutationsCompanion data) {
    return OutboxMutation(
      id: data.id.present ? data.id.value : this.id,
      itemId: data.itemId.present ? data.itemId.value : this.itemId,
      type: data.type.present ? data.type.value : this.type,
      payloadJson: data.payloadJson.present
          ? data.payloadJson.value
          : this.payloadJson,
      createdAt: data.createdAt.present ? data.createdAt.value : this.createdAt,
    );
  }

  @override
  String toString() {
    return (StringBuffer('OutboxMutation(')
          ..write('id: $id, ')
          ..write('itemId: $itemId, ')
          ..write('type: $type, ')
          ..write('payloadJson: $payloadJson, ')
          ..write('createdAt: $createdAt')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, itemId, type, payloadJson, createdAt);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is OutboxMutation &&
          other.id == this.id &&
          other.itemId == this.itemId &&
          other.type == this.type &&
          other.payloadJson == this.payloadJson &&
          other.createdAt == this.createdAt);
}

class OutboxMutationsCompanion extends UpdateCompanion<OutboxMutation> {
  final Value<int> id;
  final Value<String> itemId;
  final Value<OutboxMutationType> type;
  final Value<String> payloadJson;
  final Value<DateTime> createdAt;
  const OutboxMutationsCompanion({
    this.id = const Value.absent(),
    this.itemId = const Value.absent(),
    this.type = const Value.absent(),
    this.payloadJson = const Value.absent(),
    this.createdAt = const Value.absent(),
  });
  OutboxMutationsCompanion.insert({
    this.id = const Value.absent(),
    required String itemId,
    required OutboxMutationType type,
    required String payloadJson,
    this.createdAt = const Value.absent(),
  }) : itemId = Value(itemId),
       type = Value(type),
       payloadJson = Value(payloadJson);
  static Insertable<OutboxMutation> custom({
    Expression<int>? id,
    Expression<String>? itemId,
    Expression<String>? type,
    Expression<String>? payloadJson,
    Expression<DateTime>? createdAt,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (itemId != null) 'item_id': itemId,
      if (type != null) 'type': type,
      if (payloadJson != null) 'payload_json': payloadJson,
      if (createdAt != null) 'created_at': createdAt,
    });
  }

  OutboxMutationsCompanion copyWith({
    Value<int>? id,
    Value<String>? itemId,
    Value<OutboxMutationType>? type,
    Value<String>? payloadJson,
    Value<DateTime>? createdAt,
  }) {
    return OutboxMutationsCompanion(
      id: id ?? this.id,
      itemId: itemId ?? this.itemId,
      type: type ?? this.type,
      payloadJson: payloadJson ?? this.payloadJson,
      createdAt: createdAt ?? this.createdAt,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (itemId.present) {
      map['item_id'] = Variable<String>(itemId.value);
    }
    if (type.present) {
      map['type'] = Variable<String>(
        $OutboxMutationsTable.$convertertype.toSql(type.value),
      );
    }
    if (payloadJson.present) {
      map['payload_json'] = Variable<String>(payloadJson.value);
    }
    if (createdAt.present) {
      map['created_at'] = Variable<DateTime>(createdAt.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('OutboxMutationsCompanion(')
          ..write('id: $id, ')
          ..write('itemId: $itemId, ')
          ..write('type: $type, ')
          ..write('payloadJson: $payloadJson, ')
          ..write('createdAt: $createdAt')
          ..write(')'))
        .toString();
  }
}

abstract class _$AppDatabase extends GeneratedDatabase {
  _$AppDatabase(QueryExecutor e) : super(e);
  $AppDatabaseManager get managers => $AppDatabaseManager(this);
  late final $LocalItemsTable localItems = $LocalItemsTable(this);
  late final $LocalCategoriesTable localCategories = $LocalCategoriesTable(
    this,
  );
  late final $OutboxMutationsTable outboxMutations = $OutboxMutationsTable(
    this,
  );
  @override
  Iterable<TableInfo<Table, Object?>> get allTables =>
      allSchemaEntities.whereType<TableInfo<Table, Object?>>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities => [
    localItems,
    localCategories,
    outboxMutations,
  ];
}

typedef $$LocalItemsTableCreateCompanionBuilder =
    LocalItemsCompanion Function({
      required String itemId,
      required String name,
      required String itemType,
      Value<String?> categoryId,
      Value<String?> categoryColor,
      Value<String?> purchaseLink,
      required String trackingMode,
      required DateTime nextDueDate,
      Value<DateTime?> lastCompletedAt,
      Value<String?> lastCompletedByName,
      Value<DateTime?> updatedAt,
      Value<int> rowid,
    });
typedef $$LocalItemsTableUpdateCompanionBuilder =
    LocalItemsCompanion Function({
      Value<String> itemId,
      Value<String> name,
      Value<String> itemType,
      Value<String?> categoryId,
      Value<String?> categoryColor,
      Value<String?> purchaseLink,
      Value<String> trackingMode,
      Value<DateTime> nextDueDate,
      Value<DateTime?> lastCompletedAt,
      Value<String?> lastCompletedByName,
      Value<DateTime?> updatedAt,
      Value<int> rowid,
    });

class $$LocalItemsTableFilterComposer
    extends Composer<_$AppDatabase, $LocalItemsTable> {
  $$LocalItemsTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<String> get itemId => $composableBuilder(
    column: $table.itemId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get itemType => $composableBuilder(
    column: $table.itemType,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get categoryId => $composableBuilder(
    column: $table.categoryId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get categoryColor => $composableBuilder(
    column: $table.categoryColor,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get purchaseLink => $composableBuilder(
    column: $table.purchaseLink,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get trackingMode => $composableBuilder(
    column: $table.trackingMode,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get nextDueDate => $composableBuilder(
    column: $table.nextDueDate,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get lastCompletedAt => $composableBuilder(
    column: $table.lastCompletedAt,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get lastCompletedByName => $composableBuilder(
    column: $table.lastCompletedByName,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get updatedAt => $composableBuilder(
    column: $table.updatedAt,
    builder: (column) => ColumnFilters(column),
  );
}

class $$LocalItemsTableOrderingComposer
    extends Composer<_$AppDatabase, $LocalItemsTable> {
  $$LocalItemsTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<String> get itemId => $composableBuilder(
    column: $table.itemId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get itemType => $composableBuilder(
    column: $table.itemType,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get categoryId => $composableBuilder(
    column: $table.categoryId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get categoryColor => $composableBuilder(
    column: $table.categoryColor,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get purchaseLink => $composableBuilder(
    column: $table.purchaseLink,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get trackingMode => $composableBuilder(
    column: $table.trackingMode,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get nextDueDate => $composableBuilder(
    column: $table.nextDueDate,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get lastCompletedAt => $composableBuilder(
    column: $table.lastCompletedAt,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get lastCompletedByName => $composableBuilder(
    column: $table.lastCompletedByName,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get updatedAt => $composableBuilder(
    column: $table.updatedAt,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$LocalItemsTableAnnotationComposer
    extends Composer<_$AppDatabase, $LocalItemsTable> {
  $$LocalItemsTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<String> get itemId =>
      $composableBuilder(column: $table.itemId, builder: (column) => column);

  GeneratedColumn<String> get name =>
      $composableBuilder(column: $table.name, builder: (column) => column);

  GeneratedColumn<String> get itemType =>
      $composableBuilder(column: $table.itemType, builder: (column) => column);

  GeneratedColumn<String> get categoryId => $composableBuilder(
    column: $table.categoryId,
    builder: (column) => column,
  );

  GeneratedColumn<String> get categoryColor => $composableBuilder(
    column: $table.categoryColor,
    builder: (column) => column,
  );

  GeneratedColumn<String> get purchaseLink => $composableBuilder(
    column: $table.purchaseLink,
    builder: (column) => column,
  );

  GeneratedColumn<String> get trackingMode => $composableBuilder(
    column: $table.trackingMode,
    builder: (column) => column,
  );

  GeneratedColumn<DateTime> get nextDueDate => $composableBuilder(
    column: $table.nextDueDate,
    builder: (column) => column,
  );

  GeneratedColumn<DateTime> get lastCompletedAt => $composableBuilder(
    column: $table.lastCompletedAt,
    builder: (column) => column,
  );

  GeneratedColumn<String> get lastCompletedByName => $composableBuilder(
    column: $table.lastCompletedByName,
    builder: (column) => column,
  );

  GeneratedColumn<DateTime> get updatedAt =>
      $composableBuilder(column: $table.updatedAt, builder: (column) => column);
}

class $$LocalItemsTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $LocalItemsTable,
          LocalItem,
          $$LocalItemsTableFilterComposer,
          $$LocalItemsTableOrderingComposer,
          $$LocalItemsTableAnnotationComposer,
          $$LocalItemsTableCreateCompanionBuilder,
          $$LocalItemsTableUpdateCompanionBuilder,
          (
            LocalItem,
            BaseReferences<_$AppDatabase, $LocalItemsTable, LocalItem>,
          ),
          LocalItem,
          PrefetchHooks Function()
        > {
  $$LocalItemsTableTableManager(_$AppDatabase db, $LocalItemsTable table)
    : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$LocalItemsTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$LocalItemsTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$LocalItemsTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<String> itemId = const Value.absent(),
                Value<String> name = const Value.absent(),
                Value<String> itemType = const Value.absent(),
                Value<String?> categoryId = const Value.absent(),
                Value<String?> categoryColor = const Value.absent(),
                Value<String?> purchaseLink = const Value.absent(),
                Value<String> trackingMode = const Value.absent(),
                Value<DateTime> nextDueDate = const Value.absent(),
                Value<DateTime?> lastCompletedAt = const Value.absent(),
                Value<String?> lastCompletedByName = const Value.absent(),
                Value<DateTime?> updatedAt = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => LocalItemsCompanion(
                itemId: itemId,
                name: name,
                itemType: itemType,
                categoryId: categoryId,
                categoryColor: categoryColor,
                purchaseLink: purchaseLink,
                trackingMode: trackingMode,
                nextDueDate: nextDueDate,
                lastCompletedAt: lastCompletedAt,
                lastCompletedByName: lastCompletedByName,
                updatedAt: updatedAt,
                rowid: rowid,
              ),
          createCompanionCallback:
              ({
                required String itemId,
                required String name,
                required String itemType,
                Value<String?> categoryId = const Value.absent(),
                Value<String?> categoryColor = const Value.absent(),
                Value<String?> purchaseLink = const Value.absent(),
                required String trackingMode,
                required DateTime nextDueDate,
                Value<DateTime?> lastCompletedAt = const Value.absent(),
                Value<String?> lastCompletedByName = const Value.absent(),
                Value<DateTime?> updatedAt = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => LocalItemsCompanion.insert(
                itemId: itemId,
                name: name,
                itemType: itemType,
                categoryId: categoryId,
                categoryColor: categoryColor,
                purchaseLink: purchaseLink,
                trackingMode: trackingMode,
                nextDueDate: nextDueDate,
                lastCompletedAt: lastCompletedAt,
                lastCompletedByName: lastCompletedByName,
                updatedAt: updatedAt,
                rowid: rowid,
              ),
          withReferenceMapper: (p0) => p0
              .map(
                (e) => (
                  e.readTable<$LocalItemsTable, LocalItem>(table),
                  BaseReferences<_$AppDatabase, $LocalItemsTable, LocalItem>(
                    db,
                    table,
                    e,
                  ),
                ),
              )
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$LocalItemsTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $LocalItemsTable,
      LocalItem,
      $$LocalItemsTableFilterComposer,
      $$LocalItemsTableOrderingComposer,
      $$LocalItemsTableAnnotationComposer,
      $$LocalItemsTableCreateCompanionBuilder,
      $$LocalItemsTableUpdateCompanionBuilder,
      (LocalItem, BaseReferences<_$AppDatabase, $LocalItemsTable, LocalItem>),
      LocalItem,
      PrefetchHooks Function()
    >;
typedef $$LocalCategoriesTableCreateCompanionBuilder =
    LocalCategoriesCompanion Function({
      required String categoryId,
      required String name,
      Value<String?> color,
      Value<int> rowid,
    });
typedef $$LocalCategoriesTableUpdateCompanionBuilder =
    LocalCategoriesCompanion Function({
      Value<String> categoryId,
      Value<String> name,
      Value<String?> color,
      Value<int> rowid,
    });

class $$LocalCategoriesTableFilterComposer
    extends Composer<_$AppDatabase, $LocalCategoriesTable> {
  $$LocalCategoriesTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<String> get categoryId => $composableBuilder(
    column: $table.categoryId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get color => $composableBuilder(
    column: $table.color,
    builder: (column) => ColumnFilters(column),
  );
}

class $$LocalCategoriesTableOrderingComposer
    extends Composer<_$AppDatabase, $LocalCategoriesTable> {
  $$LocalCategoriesTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<String> get categoryId => $composableBuilder(
    column: $table.categoryId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get color => $composableBuilder(
    column: $table.color,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$LocalCategoriesTableAnnotationComposer
    extends Composer<_$AppDatabase, $LocalCategoriesTable> {
  $$LocalCategoriesTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<String> get categoryId => $composableBuilder(
    column: $table.categoryId,
    builder: (column) => column,
  );

  GeneratedColumn<String> get name =>
      $composableBuilder(column: $table.name, builder: (column) => column);

  GeneratedColumn<String> get color =>
      $composableBuilder(column: $table.color, builder: (column) => column);
}

class $$LocalCategoriesTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $LocalCategoriesTable,
          LocalCategory,
          $$LocalCategoriesTableFilterComposer,
          $$LocalCategoriesTableOrderingComposer,
          $$LocalCategoriesTableAnnotationComposer,
          $$LocalCategoriesTableCreateCompanionBuilder,
          $$LocalCategoriesTableUpdateCompanionBuilder,
          (
            LocalCategory,
            BaseReferences<_$AppDatabase, $LocalCategoriesTable, LocalCategory>,
          ),
          LocalCategory,
          PrefetchHooks Function()
        > {
  $$LocalCategoriesTableTableManager(
    _$AppDatabase db,
    $LocalCategoriesTable table,
  ) : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$LocalCategoriesTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$LocalCategoriesTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$LocalCategoriesTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<String> categoryId = const Value.absent(),
                Value<String> name = const Value.absent(),
                Value<String?> color = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => LocalCategoriesCompanion(
                categoryId: categoryId,
                name: name,
                color: color,
                rowid: rowid,
              ),
          createCompanionCallback:
              ({
                required String categoryId,
                required String name,
                Value<String?> color = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => LocalCategoriesCompanion.insert(
                categoryId: categoryId,
                name: name,
                color: color,
                rowid: rowid,
              ),
          withReferenceMapper: (p0) => p0
              .map(
                (e) => (
                  e.readTable<$LocalCategoriesTable, LocalCategory>(table),
                  BaseReferences<
                    _$AppDatabase,
                    $LocalCategoriesTable,
                    LocalCategory
                  >(db, table, e),
                ),
              )
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$LocalCategoriesTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $LocalCategoriesTable,
      LocalCategory,
      $$LocalCategoriesTableFilterComposer,
      $$LocalCategoriesTableOrderingComposer,
      $$LocalCategoriesTableAnnotationComposer,
      $$LocalCategoriesTableCreateCompanionBuilder,
      $$LocalCategoriesTableUpdateCompanionBuilder,
      (
        LocalCategory,
        BaseReferences<_$AppDatabase, $LocalCategoriesTable, LocalCategory>,
      ),
      LocalCategory,
      PrefetchHooks Function()
    >;
typedef $$OutboxMutationsTableCreateCompanionBuilder =
    OutboxMutationsCompanion Function({
      Value<int> id,
      required String itemId,
      required OutboxMutationType type,
      required String payloadJson,
      Value<DateTime> createdAt,
    });
typedef $$OutboxMutationsTableUpdateCompanionBuilder =
    OutboxMutationsCompanion Function({
      Value<int> id,
      Value<String> itemId,
      Value<OutboxMutationType> type,
      Value<String> payloadJson,
      Value<DateTime> createdAt,
    });

class $$OutboxMutationsTableFilterComposer
    extends Composer<_$AppDatabase, $OutboxMutationsTable> {
  $$OutboxMutationsTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get itemId => $composableBuilder(
    column: $table.itemId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnWithTypeConverterFilters<OutboxMutationType, OutboxMutationType, String>
  get type => $composableBuilder(
    column: $table.type,
    builder: (column) => ColumnWithTypeConverterFilters(column),
  );

  ColumnFilters<String> get payloadJson => $composableBuilder(
    column: $table.payloadJson,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get createdAt => $composableBuilder(
    column: $table.createdAt,
    builder: (column) => ColumnFilters(column),
  );
}

class $$OutboxMutationsTableOrderingComposer
    extends Composer<_$AppDatabase, $OutboxMutationsTable> {
  $$OutboxMutationsTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get itemId => $composableBuilder(
    column: $table.itemId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get type => $composableBuilder(
    column: $table.type,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get payloadJson => $composableBuilder(
    column: $table.payloadJson,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get createdAt => $composableBuilder(
    column: $table.createdAt,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$OutboxMutationsTableAnnotationComposer
    extends Composer<_$AppDatabase, $OutboxMutationsTable> {
  $$OutboxMutationsTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<int> get id =>
      $composableBuilder(column: $table.id, builder: (column) => column);

  GeneratedColumn<String> get itemId =>
      $composableBuilder(column: $table.itemId, builder: (column) => column);

  GeneratedColumnWithTypeConverter<OutboxMutationType, String> get type =>
      $composableBuilder(column: $table.type, builder: (column) => column);

  GeneratedColumn<String> get payloadJson => $composableBuilder(
    column: $table.payloadJson,
    builder: (column) => column,
  );

  GeneratedColumn<DateTime> get createdAt =>
      $composableBuilder(column: $table.createdAt, builder: (column) => column);
}

class $$OutboxMutationsTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $OutboxMutationsTable,
          OutboxMutation,
          $$OutboxMutationsTableFilterComposer,
          $$OutboxMutationsTableOrderingComposer,
          $$OutboxMutationsTableAnnotationComposer,
          $$OutboxMutationsTableCreateCompanionBuilder,
          $$OutboxMutationsTableUpdateCompanionBuilder,
          (
            OutboxMutation,
            BaseReferences<
              _$AppDatabase,
              $OutboxMutationsTable,
              OutboxMutation
            >,
          ),
          OutboxMutation,
          PrefetchHooks Function()
        > {
  $$OutboxMutationsTableTableManager(
    _$AppDatabase db,
    $OutboxMutationsTable table,
  ) : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$OutboxMutationsTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$OutboxMutationsTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$OutboxMutationsTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                Value<String> itemId = const Value.absent(),
                Value<OutboxMutationType> type = const Value.absent(),
                Value<String> payloadJson = const Value.absent(),
                Value<DateTime> createdAt = const Value.absent(),
              }) => OutboxMutationsCompanion(
                id: id,
                itemId: itemId,
                type: type,
                payloadJson: payloadJson,
                createdAt: createdAt,
              ),
          createCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                required String itemId,
                required OutboxMutationType type,
                required String payloadJson,
                Value<DateTime> createdAt = const Value.absent(),
              }) => OutboxMutationsCompanion.insert(
                id: id,
                itemId: itemId,
                type: type,
                payloadJson: payloadJson,
                createdAt: createdAt,
              ),
          withReferenceMapper: (p0) => p0
              .map(
                (e) => (
                  e.readTable<$OutboxMutationsTable, OutboxMutation>(table),
                  BaseReferences<
                    _$AppDatabase,
                    $OutboxMutationsTable,
                    OutboxMutation
                  >(db, table, e),
                ),
              )
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$OutboxMutationsTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $OutboxMutationsTable,
      OutboxMutation,
      $$OutboxMutationsTableFilterComposer,
      $$OutboxMutationsTableOrderingComposer,
      $$OutboxMutationsTableAnnotationComposer,
      $$OutboxMutationsTableCreateCompanionBuilder,
      $$OutboxMutationsTableUpdateCompanionBuilder,
      (
        OutboxMutation,
        BaseReferences<_$AppDatabase, $OutboxMutationsTable, OutboxMutation>,
      ),
      OutboxMutation,
      PrefetchHooks Function()
    >;

class $AppDatabaseManager {
  final _$AppDatabase _db;
  $AppDatabaseManager(this._db);
  $$LocalItemsTableTableManager get localItems =>
      $$LocalItemsTableTableManager(_db, _db.localItems);
  $$LocalCategoriesTableTableManager get localCategories =>
      $$LocalCategoriesTableTableManager(_db, _db.localCategories);
  $$OutboxMutationsTableTableManager get outboxMutations =>
      $$OutboxMutationsTableTableManager(_db, _db.outboxMutations);
}

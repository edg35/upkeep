import 'package:flutter/material.dart';

/// The curated set of icons an item can be tagged with. The `key` is what
/// gets stored in the backend's freeform `icon` string field; `icon` is only
/// ever resolved client-side from that key.
class IconOption {
  const IconOption(this.key, this.icon, this.label);

  final String key;
  final IconData icon;
  final String label;
}

const iconOptions = <IconOption>[
  IconOption('wrench', Icons.build_rounded, 'Repair'),
  IconOption('broom', Icons.cleaning_services_rounded, 'Cleaning'),
  IconOption('receipt', Icons.receipt_long_rounded, 'Bill'),
  IconOption('bulb', Icons.lightbulb_outline_rounded, 'Utility'),
  IconOption('droplet', Icons.water_drop_outlined, 'Water/plumbing'),
  IconOption('filter', Icons.filter_alt_outlined, 'Filter'),
  IconOption('pill', Icons.medication_outlined, 'Health'),
  IconOption('pet', Icons.pets_rounded, 'Pet'),
  IconOption('car', Icons.directions_car_filled_rounded, 'Vehicle'),
  IconOption('plant', Icons.local_florist_rounded, 'Plant'),
  IconOption('calendar', Icons.event_rounded, 'Appointment'),
  IconOption('home', Icons.home_rounded, 'Home'),
];

IconData resolveIconKey(String? key) {
  return iconOptions.firstWhere(
    (o) => o.key == key,
    orElse: () => iconOptions.first,
  ).icon;
}

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

enum TaskListDensity {
  comfortable('Comfortable', 'Cards'),
  cozy('Cozy', 'One card, divided'),
  compact('Compact', 'Single line');

  const TaskListDensity(this.label, this.description);

  final String label;
  final String description;
}

const _prefsKey = 'upkeep.task_list_density';

class TaskListDensityController extends StateNotifier<TaskListDensity> {
  TaskListDensityController() : super(TaskListDensity.comfortable) {
    _restore();
  }

  Future<void> _restore() async {
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString(_prefsKey);
    final match = TaskListDensity.values.where((d) => d.name == saved);
    if (match.isNotEmpty) state = match.first;
  }

  Future<void> select(TaskListDensity density) async {
    state = density;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_prefsKey, density.name);
  }
}

final taskListDensityProvider =
    StateNotifierProvider<TaskListDensityController, TaskListDensity>((ref) {
  return TaskListDensityController();
});

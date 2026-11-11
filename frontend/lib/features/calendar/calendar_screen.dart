import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../items/item_status.dart';
import '../items/items_controller.dart';
import '../items/widgets/item_list_row.dart';
import 'calendar_days.dart';
import 'widgets/month_calendar.dart';

const _weekdayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

class CalendarScreen extends ConsumerStatefulWidget {
  const CalendarScreen({super.key});

  @override
  ConsumerState<CalendarScreen> createState() => _CalendarScreenState();
}

class _CalendarScreenState extends ConsumerState<CalendarScreen> {
  late DateTime _month;
  late DateTime _selected;

  @override
  void initState() {
    super.initState();
    final today = dateOnly(DateTime.now());
    _month = DateTime(today.year, today.month);
    _selected = today;
  }

  void _changeMonth(int delta) {
    final today = dateOnly(DateTime.now());
    final next = DateTime(_month.year, _month.month + delta);
    setState(() {
      _month = next;
      // Land on today when paging back to the current month, otherwise the 1st.
      _selected = (today.year == next.year && today.month == next.month)
          ? today
          : next;
    });
  }

  @override
  Widget build(BuildContext context) {
    final itemsState = ref.watch(itemsControllerProvider);
    final byDay = itemsByDueDay(itemsState.items);
    final today = dateOnly(DateTime.now());
    final dayItems = byDay[_selected] ?? const [];

    return Scaffold(
      backgroundColor: AppColors.paper,
      appBar: AppBar(title: const Text('Calendar')),
      body: SafeArea(
        child: RefreshIndicator(
          onRefresh: () => ref.read(itemsControllerProvider.notifier).load(),
          child: ListView(
            padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
            children: [
              MonthCalendar(
                month: _month,
                selectedDay: _selected,
                today: today,
                itemsByDay: byDay,
                onDaySelected: (day) => setState(() => _selected = day),
                onMonthChanged: _changeMonth,
              ),
              const SizedBox(height: 20),
              Text(
                _selected == today
                    ? 'Today'
                    : '${_weekdayNames[_selected.weekday - 1]}, '
                          '${monthNames[_selected.month - 1]} ${_selected.day}',
                style: AppTypography.title,
              ),
              const SizedBox(height: 12),
              if (itemsState.loading && itemsState.items.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 32),
                  child: Center(
                    child: CircularProgressIndicator(color: AppColors.forest),
                  ),
                )
              else if (dayItems.isEmpty)
                Text(
                  'Nothing due this day',
                  style: AppTypography.body.copyWith(color: AppColors.muted),
                )
              else
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  decoration: BoxDecoration(
                    color: AppColors.card,
                    borderRadius: BorderRadius.circular(24),
                  ),
                  child: Column(
                    children: [
                      for (var i = 0; i < dayItems.length; i++) ...[
                        ItemListRow(
                          item: dayItems[i],
                          completing: dayItems[i].id == itemsState.completingId,
                          onToggle: () {
                            if (computeItemStatus(
                                  dayItems[i],
                                  DateTime.now(),
                                ) ==
                                ItemStatus.completedToday) {
                              return;
                            }
                            ref
                                .read(itemsControllerProvider.notifier)
                                .complete(dayItems[i].id);
                          },
                          onTap: () =>
                              context.push('/tasks/edit/${dayItems[i].id}'),
                        ),
                        if (i != dayItems.length - 1)
                          const Divider(height: 1, color: AppColors.paper),
                      ],
                    ],
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

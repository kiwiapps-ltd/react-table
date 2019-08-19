import PropTypes from 'prop-types';

export default {
  // General
  direction: PropTypes.oneOf(["rtl", "ltr"]),
  rowHeight: PropTypes.number.isRequired,
  data: PropTypes.any,
  loading: PropTypes.bool,
  showPagination: PropTypes.bool,
  showPaginationTop: PropTypes.bool,
  showPaginationBottom: PropTypes.bool,
  showPageSizeOptions: PropTypes.bool,
  pageSizeOptions: PropTypes.array,
  defaultPageSize: PropTypes.number,
  showPageJump: PropTypes.bool,
  collapseOnSortingChange: PropTypes.bool,
  collapseOnPageChange: PropTypes.bool,
  collapseOnDataChange: PropTypes.bool,
  freezeWhenExpanded: PropTypes.bool,
  sortable: PropTypes.bool,
  resizable: PropTypes.bool,
  filterable: PropTypes.bool,
  defaultSortDesc: PropTypes.bool,
  defaultSorted: PropTypes.array,
  defaultFiltered: PropTypes.array,
  defaultResized: PropTypes.array,
  defaultExpanded: PropTypes.object,
  defaultFilterMethod: PropTypes.func,
  defaultSortMethod: PropTypes.func,

  // Controlled State Callbacks
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onSortedChange: PropTypes.func,
  onFilteredChange: PropTypes.func,
  onResizedChange: PropTypes.func,
  onExpandedChange: PropTypes.func,

  // Pivoting
  pivotBy: PropTypes.array,

  // Key Constants
  pivotValKey: PropTypes.string,
  pivotIDKey: PropTypes.string,
  subRowsKey: PropTypes.string,
  aggregatedKey: PropTypes.string,
  nestingLevelKey: PropTypes.string,
  originalKey: PropTypes.string,
  indexKey: PropTypes.string,
  groupedByPivotKey: PropTypes.string,

  // Server-side Callbacks
  onFetchData: PropTypes.func,

  // Classes
  className: PropTypes.string,
  style: PropTypes.object,

  // Component decorators
  getProps: PropTypes.func,
  getTableProps: PropTypes.func,
  getTheadGroupProps: PropTypes.func,
  getTheadGroupTrProps: PropTypes.func,
  getTheadGroupThProps: PropTypes.func,
  getTheadProps: PropTypes.func,
  getTheadTrProps: PropTypes.func,
  getTheadThProps: PropTypes.func,
  getTheadFilterProps: PropTypes.func,
  getTheadFilterTrProps: PropTypes.func,
  getTheadFilterThProps: PropTypes.func,
  getTbodyProps: PropTypes.func,
  getTrGroupProps: PropTypes.func,
  getTrProps: PropTypes.func,
  getTdProps: PropTypes.func,
  getTfootProps: PropTypes.func,
  getTfootTrProps: PropTypes.func,
  getTfootTdProps: PropTypes.func,
  getPaginationProps: PropTypes.func,
  getLoadingProps: PropTypes.func,
  getNoDataProps: PropTypes.func,
  getResizerProps: PropTypes.func,

  // Global Column Defaults
  columns: PropTypes.arrayOf(PropTypes.shape({
    // Renderers
    Cell: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Header: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Aggregated: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Pivot: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    PivotValue: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Expander: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Filter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

    // All Columns
    sortable: PropTypes.bool, // use table default
    resizable: PropTypes.bool, // use table default
    filterable: PropTypes.bool, // use table default
    show: PropTypes.bool,
    minWidth: PropTypes.number,
    minResizeWidth: PropTypes.number,

    // Cells only
    className: PropTypes.string,
    style: PropTypes.object,
    getProps: PropTypes.func,

    // Pivot only
    aggregate: PropTypes.func,

    // Headers only
    headerClassName: PropTypes.string,
    headerStyle: PropTypes.object,
    getHeaderProps: PropTypes.func,

    // Footers only
    footerClassName: PropTypes.string,
    footerStyle: PropTypes.object,
    getFooterProps: PropTypes.func,
    filterMethod: PropTypes.func,
    filterAll: PropTypes.bool,
    sortMethod: PropTypes.func
  })),

  // Global Expander Column Defaults
  expanderDefaults: PropTypes.shape({
    sortable: PropTypes.bool,
    resizable: PropTypes.bool,
    filterable: PropTypes.bool,
    width: PropTypes.number
  }),

  pivotDefaults: PropTypes.object,

  // Text
  previousText: PropTypes.node,
  nextText: PropTypes.node,
  loadingText: PropTypes.node,
  noDataText: PropTypes.node,
  pageText: PropTypes.node,
  ofText: PropTypes.node,
  rowsText: PropTypes.node,
  pageJumpText: PropTypes.node,
  rowsSelectorText: PropTypes.node,

  // Components
  TableComponent: PropTypes.elementType,
  TheadComponent: PropTypes.elementType,
  TbodyComponent: PropTypes.elementType,
  TrGroupComponent: PropTypes.elementType,
  TrComponent: PropTypes.elementType,
  ThComponent: PropTypes.elementType,
  TdComponent: PropTypes.elementType,
  TfootComponent: PropTypes.elementType,
  FilterComponent: PropTypes.elementType,
  ExpanderComponent: PropTypes.elementType,
  PivotValueComponent: PropTypes.elementType,
  AggregatedComponent: PropTypes.elementType,
  // this is a computed default generated using
  PivotComponent: PropTypes.elementType,
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: PropTypes.elementType,
  PreviousComponent: PropTypes.elementType,
  NextComponent: PropTypes.elementType,
  LoadingComponent: PropTypes.elementType,
  NoDataComponent: PropTypes.elementType,
  ResizerComponent: PropTypes.elementType,
  PadRowComponent: PropTypes.elementType
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wVHlwZXMuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiZGlyZWN0aW9uIiwib25lT2YiLCJyb3dIZWlnaHQiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZGF0YSIsImFueSIsImxvYWRpbmciLCJib29sIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImFycmF5IiwiZGVmYXVsdFBhZ2VTaXplIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwib2JqZWN0IiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZ1bmMiLCJkZWZhdWx0U29ydE1ldGhvZCIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsInBpdm90VmFsS2V5Iiwic3RyaW5nIiwicGl2b3RJREtleSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5IiwibmVzdGluZ0xldmVsS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsImNvbHVtbnMiLCJhcnJheU9mIiwic2hhcGUiLCJDZWxsIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsIkhlYWRlciIsIkZvb3RlciIsIkFnZ3JlZ2F0ZWQiLCJQaXZvdCIsIlBpdm90VmFsdWUiLCJFeHBhbmRlciIsIkZpbHRlciIsInNob3ciLCJtaW5XaWR0aCIsIm1pblJlc2l6ZVdpZHRoIiwiYWdncmVnYXRlIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJnZXRIZWFkZXJQcm9wcyIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlclN0eWxlIiwiZ2V0Rm9vdGVyUHJvcHMiLCJmaWx0ZXJNZXRob2QiLCJmaWx0ZXJBbGwiLCJzb3J0TWV0aG9kIiwiZXhwYW5kZXJEZWZhdWx0cyIsIndpZHRoIiwicGl2b3REZWZhdWx0cyIsInByZXZpb3VzVGV4dCIsIm5vZGUiLCJuZXh0VGV4dCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInBhZ2VUZXh0Iiwib2ZUZXh0Iiwicm93c1RleHQiLCJwYWdlSnVtcFRleHQiLCJyb3dzU2VsZWN0b3JUZXh0IiwiVGFibGVDb21wb25lbnQiLCJlbGVtZW50VHlwZSIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckdyb3VwQ29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJFeHBhbmRlckNvbXBvbmVudCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiUHJldmlvdXNDb21wb25lbnQiLCJOZXh0Q29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJQYWRSb3dDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7O0FBRUEsZUFBZTtBQUNiO0FBQ0FDLGFBQVdELFVBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQixDQUZFO0FBR2JDLGFBQVdILFVBQVVJLE1BQVYsQ0FBaUJDLFVBSGY7QUFJYkMsUUFBTU4sVUFBVU8sR0FKSDtBQUtiQyxXQUFTUixVQUFVUyxJQUxOO0FBTWJDLGtCQUFnQlYsVUFBVVMsSUFOYjtBQU9iRSxxQkFBbUJYLFVBQVVTLElBUGhCO0FBUWJHLHdCQUFzQlosVUFBVVMsSUFSbkI7QUFTYkksdUJBQXFCYixVQUFVUyxJQVRsQjtBQVViSyxtQkFBaUJkLFVBQVVlLEtBVmQ7QUFXYkMsbUJBQWlCaEIsVUFBVUksTUFYZDtBQVliYSxnQkFBY2pCLFVBQVVTLElBWlg7QUFhYlMsMkJBQXlCbEIsVUFBVVMsSUFidEI7QUFjYlUsd0JBQXNCbkIsVUFBVVMsSUFkbkI7QUFlYlcsd0JBQXNCcEIsVUFBVVMsSUFmbkI7QUFnQmJZLHNCQUFvQnJCLFVBQVVTLElBaEJqQjtBQWlCYmEsWUFBVXRCLFVBQVVTLElBakJQO0FBa0JiYyxhQUFXdkIsVUFBVVMsSUFsQlI7QUFtQmJlLGNBQVl4QixVQUFVUyxJQW5CVDtBQW9CYmdCLG1CQUFpQnpCLFVBQVVTLElBcEJkO0FBcUJiaUIsaUJBQWUxQixVQUFVZSxLQXJCWjtBQXNCYlksbUJBQWlCM0IsVUFBVWUsS0F0QmQ7QUF1QmJhLGtCQUFnQjVCLFVBQVVlLEtBdkJiO0FBd0JiYyxtQkFBaUI3QixVQUFVOEIsTUF4QmQ7QUF5QmJDLHVCQUFxQi9CLFVBQVVnQyxJQXpCbEI7QUEwQmJDLHFCQUFtQmpDLFVBQVVnQyxJQTFCaEI7O0FBNEJiO0FBQ0FFLGdCQUFjbEMsVUFBVWdDLElBN0JYO0FBOEJiRyxvQkFBa0JuQyxVQUFVZ0MsSUE5QmY7QUErQmJJLGtCQUFnQnBDLFVBQVVnQyxJQS9CYjtBQWdDYkssb0JBQWtCckMsVUFBVWdDLElBaENmO0FBaUNiTSxtQkFBaUJ0QyxVQUFVZ0MsSUFqQ2Q7QUFrQ2JPLG9CQUFrQnZDLFVBQVVnQyxJQWxDZjs7QUFvQ2I7QUFDQVEsV0FBU3hDLFVBQVVlLEtBckNOOztBQXVDYjtBQUNBMEIsZUFBYXpDLFVBQVUwQyxNQXhDVjtBQXlDYkMsY0FBWTNDLFVBQVUwQyxNQXpDVDtBQTBDYkUsY0FBWTVDLFVBQVUwQyxNQTFDVDtBQTJDYkcsaUJBQWU3QyxVQUFVMEMsTUEzQ1o7QUE0Q2JJLG1CQUFpQjlDLFVBQVUwQyxNQTVDZDtBQTZDYkssZUFBYS9DLFVBQVUwQyxNQTdDVjtBQThDYk0sWUFBVWhELFVBQVUwQyxNQTlDUDtBQStDYk8scUJBQW1CakQsVUFBVTBDLE1BL0NoQjs7QUFpRGI7QUFDQVEsZUFBYWxELFVBQVVnQyxJQWxEVjs7QUFvRGI7QUFDQW1CLGFBQVduRCxVQUFVMEMsTUFyRFI7QUFzRGJVLFNBQU9wRCxVQUFVOEIsTUF0REo7O0FBd0RiO0FBQ0F1QixZQUFVckQsVUFBVWdDLElBekRQO0FBMERic0IsaUJBQWV0RCxVQUFVZ0MsSUExRFo7QUEyRGJ1QixzQkFBb0J2RCxVQUFVZ0MsSUEzRGpCO0FBNERid0Isd0JBQXNCeEQsVUFBVWdDLElBNURuQjtBQTZEYnlCLHdCQUFzQnpELFVBQVVnQyxJQTdEbkI7QUE4RGIwQixpQkFBZTFELFVBQVVnQyxJQTlEWjtBQStEYjJCLG1CQUFpQjNELFVBQVVnQyxJQS9EZDtBQWdFYjRCLG1CQUFpQjVELFVBQVVnQyxJQWhFZDtBQWlFYjZCLHVCQUFxQjdELFVBQVVnQyxJQWpFbEI7QUFrRWI4Qix5QkFBdUI5RCxVQUFVZ0MsSUFsRXBCO0FBbUViK0IseUJBQXVCL0QsVUFBVWdDLElBbkVwQjtBQW9FYmdDLGlCQUFlaEUsVUFBVWdDLElBcEVaO0FBcUViaUMsbUJBQWlCakUsVUFBVWdDLElBckVkO0FBc0Via0MsY0FBWWxFLFVBQVVnQyxJQXRFVDtBQXVFYm1DLGNBQVluRSxVQUFVZ0MsSUF2RVQ7QUF3RWJvQyxpQkFBZXBFLFVBQVVnQyxJQXhFWjtBQXlFYnFDLG1CQUFpQnJFLFVBQVVnQyxJQXpFZDtBQTBFYnNDLG1CQUFpQnRFLFVBQVVnQyxJQTFFZDtBQTJFYnVDLHNCQUFvQnZFLFVBQVVnQyxJQTNFakI7QUE0RWJ3QyxtQkFBaUJ4RSxVQUFVZ0MsSUE1RWQ7QUE2RWJ5QyxrQkFBZ0J6RSxVQUFVZ0MsSUE3RWI7QUE4RWIwQyxtQkFBaUIxRSxVQUFVZ0MsSUE5RWQ7O0FBZ0ZiO0FBQ0EyQyxXQUFTM0UsVUFBVTRFLE9BQVYsQ0FDUDVFLFVBQVU2RSxLQUFWLENBQWdCO0FBQ2Q7QUFDQUMsVUFBTTlFLFVBQVUrRSxTQUFWLENBQW9CLENBQUMvRSxVQUFVZ0YsT0FBWCxFQUFvQmhGLFVBQVUwQyxNQUE5QixFQUFzQzFDLFVBQVVnQyxJQUFoRCxDQUFwQixDQUZRO0FBR2RpRCxZQUFRakYsVUFBVStFLFNBQVYsQ0FBb0IsQ0FBQy9FLFVBQVVnRixPQUFYLEVBQW9CaEYsVUFBVTBDLE1BQTlCLEVBQXNDMUMsVUFBVWdDLElBQWhELENBQXBCLENBSE07QUFJZGtELFlBQVFsRixVQUFVK0UsU0FBVixDQUFvQixDQUFDL0UsVUFBVWdGLE9BQVgsRUFBb0JoRixVQUFVMEMsTUFBOUIsRUFBc0MxQyxVQUFVZ0MsSUFBaEQsQ0FBcEIsQ0FKTTtBQUtkbUQsZ0JBQVluRixVQUFVK0UsU0FBVixDQUFvQixDQUFDL0UsVUFBVWdGLE9BQVgsRUFBb0JoRixVQUFVMEMsTUFBOUIsRUFBc0MxQyxVQUFVZ0MsSUFBaEQsQ0FBcEIsQ0FMRTtBQU1kb0QsV0FBT3BGLFVBQVUrRSxTQUFWLENBQW9CLENBQUMvRSxVQUFVZ0YsT0FBWCxFQUFvQmhGLFVBQVUwQyxNQUE5QixFQUFzQzFDLFVBQVVnQyxJQUFoRCxDQUFwQixDQU5PO0FBT2RxRCxnQkFBWXJGLFVBQVUrRSxTQUFWLENBQW9CLENBQUMvRSxVQUFVZ0YsT0FBWCxFQUFvQmhGLFVBQVUwQyxNQUE5QixFQUFzQzFDLFVBQVVnQyxJQUFoRCxDQUFwQixDQVBFO0FBUWRzRCxjQUFVdEYsVUFBVStFLFNBQVYsQ0FBb0IsQ0FBQy9FLFVBQVVnRixPQUFYLEVBQW9CaEYsVUFBVTBDLE1BQTlCLEVBQXNDMUMsVUFBVWdDLElBQWhELENBQXBCLENBUkk7QUFTZHVELFlBQVF2RixVQUFVK0UsU0FBVixDQUFvQixDQUFDL0UsVUFBVWdGLE9BQVgsRUFBb0JoRixVQUFVZ0MsSUFBOUIsQ0FBcEIsQ0FUTTs7QUFXZDtBQUNBVixjQUFVdEIsVUFBVVMsSUFaTixFQVlZO0FBQzFCYyxlQUFXdkIsVUFBVVMsSUFiUCxFQWFhO0FBQzNCZSxnQkFBWXhCLFVBQVVTLElBZFIsRUFjYztBQUM1QitFLFVBQU14RixVQUFVUyxJQWZGO0FBZ0JkZ0YsY0FBVXpGLFVBQVVJLE1BaEJOO0FBaUJkc0Ysb0JBQWdCMUYsVUFBVUksTUFqQlo7O0FBbUJkO0FBQ0ErQyxlQUFXbkQsVUFBVTBDLE1BcEJQO0FBcUJkVSxXQUFPcEQsVUFBVThCLE1BckJIO0FBc0JkdUIsY0FBVXJELFVBQVVnQyxJQXRCTjs7QUF3QmQ7QUFDQTJELGVBQVczRixVQUFVZ0MsSUF6QlA7O0FBMkJkO0FBQ0E0RCxxQkFBaUI1RixVQUFVMEMsTUE1QmI7QUE2QmRtRCxpQkFBYTdGLFVBQVU4QixNQTdCVDtBQThCZGdFLG9CQUFnQjlGLFVBQVVnQyxJQTlCWjs7QUFnQ2Q7QUFDQStELHFCQUFpQi9GLFVBQVUwQyxNQWpDYjtBQWtDZHNELGlCQUFhaEcsVUFBVThCLE1BbENUO0FBbUNkbUUsb0JBQWdCakcsVUFBVWdDLElBbkNaO0FBb0Nka0Usa0JBQWNsRyxVQUFVZ0MsSUFwQ1Y7QUFxQ2RtRSxlQUFXbkcsVUFBVVMsSUFyQ1A7QUFzQ2QyRixnQkFBWXBHLFVBQVVnQztBQXRDUixHQUFoQixDQURPLENBakZJOztBQTRIYjtBQUNBcUUsb0JBQWtCckcsVUFBVTZFLEtBQVYsQ0FBZ0I7QUFDaEN2RCxjQUFVdEIsVUFBVVMsSUFEWTtBQUVoQ2MsZUFBV3ZCLFVBQVVTLElBRlc7QUFHaENlLGdCQUFZeEIsVUFBVVMsSUFIVTtBQUloQzZGLFdBQU90RyxVQUFVSTtBQUplLEdBQWhCLENBN0hMOztBQW9JYm1HLGlCQUFldkcsVUFBVThCLE1BcElaOztBQXNJYjtBQUNBMEUsZ0JBQWN4RyxVQUFVeUcsSUF2SVg7QUF3SWJDLFlBQVUxRyxVQUFVeUcsSUF4SVA7QUF5SWJFLGVBQWEzRyxVQUFVeUcsSUF6SVY7QUEwSWJHLGNBQVk1RyxVQUFVeUcsSUExSVQ7QUEySWJJLFlBQVU3RyxVQUFVeUcsSUEzSVA7QUE0SWJLLFVBQVE5RyxVQUFVeUcsSUE1SUw7QUE2SWJNLFlBQVUvRyxVQUFVeUcsSUE3SVA7QUE4SWJPLGdCQUFjaEgsVUFBVXlHLElBOUlYO0FBK0liUSxvQkFBa0JqSCxVQUFVeUcsSUEvSWY7O0FBaUpiO0FBQ0FTLGtCQUFnQmxILFVBQVVtSCxXQWxKYjtBQW1KYkMsa0JBQWdCcEgsVUFBVW1ILFdBbkpiO0FBb0piRSxrQkFBZ0JySCxVQUFVbUgsV0FwSmI7QUFxSmJHLG9CQUFrQnRILFVBQVVtSCxXQXJKZjtBQXNKYkksZUFBYXZILFVBQVVtSCxXQXRKVjtBQXVKYkssZUFBYXhILFVBQVVtSCxXQXZKVjtBQXdKYk0sZUFBYXpILFVBQVVtSCxXQXhKVjtBQXlKYk8sa0JBQWdCMUgsVUFBVW1ILFdBekpiO0FBMEpiUSxtQkFBaUIzSCxVQUFVbUgsV0ExSmQ7QUEySmJTLHFCQUFtQjVILFVBQVVtSCxXQTNKaEI7QUE0SmJVLHVCQUFxQjdILFVBQVVtSCxXQTVKbEI7QUE2SmJXLHVCQUFxQjlILFVBQVVtSCxXQTdKbEI7QUE4SmI7QUFDQVksa0JBQWdCL0gsVUFBVW1ILFdBL0piO0FBZ0tiO0FBQ0FhLHVCQUFxQmhJLFVBQVVtSCxXQWpLbEI7QUFrS2JjLHFCQUFtQmpJLFVBQVVtSCxXQWxLaEI7QUFtS2JlLGlCQUFlbEksVUFBVW1ILFdBbktaO0FBb0tiZ0Isb0JBQWtCbkksVUFBVW1ILFdBcEtmO0FBcUtiaUIsbUJBQWlCcEksVUFBVW1ILFdBcktkO0FBc0tia0Isb0JBQWtCckksVUFBVW1ILFdBdEtmO0FBdUtibUIsbUJBQWlCdEksVUFBVW1IO0FBdktkLENBQWYiLCJmaWxlIjoicHJvcFR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIEdlbmVyYWxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW1wicnRsXCIsIFwibHRyXCJdKSxcbiAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzaG93UGFnaW5hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dQYWdpbmF0aW9uVG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1BhZ2luYXRpb25Cb3R0b206IFByb3BUeXBlcy5ib29sLFxuICBzaG93UGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRQYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvd1BhZ2VKdW1wOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnJlZXplV2hlbkV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxuICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFNvcnREZXNjOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5LFxuICBkZWZhdWx0RmlsdGVyZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVmYXVsdFJlc2l6ZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVmYXVsdEV4cGFuZGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWZhdWx0RmlsdGVyTWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdFNvcnRNZXRob2Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgQ2FsbGJhY2tzXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUGFnZVNpemVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnRlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRmlsdGVyZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlc2l6ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4cGFuZGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvLyBQaXZvdGluZ1xuICBwaXZvdEJ5OiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgLy8gS2V5IENvbnN0YW50c1xuICBwaXZvdFZhbEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGl2b3RJREtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3ViUm93c0tleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWdncmVnYXRlZEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmVzdGluZ0xldmVsS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcmlnaW5hbEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5kZXhLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdyb3VwZWRCeVBpdm90S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8vIFNlcnZlci1zaWRlIENhbGxiYWNrc1xuICBvbkZldGNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gQ2xhc3Nlc1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGFibGVQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkR3JvdXBQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkR3JvdXBUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRHcm91cFRoUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUaGVhZFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRUaFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRGaWx0ZXJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkRmlsdGVyVHJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkRmlsdGVyVGhQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRib2R5UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUckdyb3VwUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRmb290UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUZm9vdFRyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUZm9vdFRkUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRQYWdpbmF0aW9uUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRMb2FkaW5nUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXROb0RhdGFQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFJlc2l6ZXJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gR2xvYmFsIENvbHVtbiBEZWZhdWx0c1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgLy8gUmVuZGVyZXJzXG4gICAgICBDZWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIEhlYWRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBGb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgQWdncmVnYXRlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBQaXZvdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBQaXZvdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIEV4cGFuZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIEZpbHRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAgIC8vIEFsbCBDb2x1bW5zXG4gICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgICAgZmlsdGVyYWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWluUmVzaXplV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAgIC8vIENlbGxzIG9ubHlcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBQaXZvdCBvbmx5XG4gICAgICBhZ2dyZWdhdGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBIZWFkZXJzIG9ubHlcbiAgICAgIGhlYWRlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0SGVhZGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBGb290ZXJzIG9ubHlcbiAgICAgIGZvb3RlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0Rm9vdGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZmlsdGVyTWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGZpbHRlckFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzb3J0TWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB9KVxuICApLFxuXG4gIC8vIEdsb2JhbCBFeHBhbmRlciBDb2x1bW4gRGVmYXVsdHNcbiAgZXhwYW5kZXJEZWZhdWx0czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG5cbiAgcGl2b3REZWZhdWx0czogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvLyBUZXh0XG4gIHByZXZpb3VzVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIG5leHRUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgbG9hZGluZ1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBub0RhdGFUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgcGFnZVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBvZlRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICByb3dzVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIHBhZ2VKdW1wVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIHJvd3NTZWxlY3RvclRleHQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8vIENvbXBvbmVudHNcbiAgVGFibGVDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgVGhlYWRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgVGJvZHlDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgVHJHcm91cENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUckNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUaENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUZENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBUZm9vdENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBGaWx0ZXJDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgRXhwYW5kZXJDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgUGl2b3RWYWx1ZUNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBBZ2dyZWdhdGVkQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIC8vIHRoaXMgaXMgYSBjb21wdXRlZCBkZWZhdWx0IGdlbmVyYXRlZCB1c2luZ1xuICBQaXZvdENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAvLyB0aGUgRXhwYW5kZXJDb21wb25lbnQgYW5kIFBpdm90VmFsdWVDb21wb25lbnQgYXQgcnVuLXRpbWUgaW4gbWV0aG9kcy5qc1xuICBQYWdpbmF0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIFByZXZpb3VzQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIE5leHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgTG9hZGluZ0NvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBOb0RhdGFDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgUmVzaXplckNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBQYWRSb3dDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbn1cbiJdfQ==
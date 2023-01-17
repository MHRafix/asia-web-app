export interface PaginationMeta {
  total_pages: number;
  total_items: number;
  current_page: number;
}

export interface PaginatedResponse<DataModel> {
  items: DataModel[];
  meta: PaginationMeta;
}

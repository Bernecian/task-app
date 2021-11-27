import { Sidebar as Self } from './Sidebar';
import {connect} from "react-redux";
import { RootState } from "../../../../store/store";
import { getCats } from "../../../../common/app/App.actions";
import { toggleSidebar } from "./Sidebar.actions";

const mapStateToProps = (state: RootState) => ({
  isVisible: state.sidebar.isVisible,
  catsCategories: state.app.categories,
  categoryId: state.app.category_ids
})

const mapDispatchToProps = {
  getCats,
  toggleSidebar
}

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Self)
import { CommonLayout as Self } from './CommonLayout'
import {connect} from "react-redux";
import {RootState} from "../../../store/store";
import {toggleSidebar} from "../components/Sidebar/Sidebar.actions";
import {getCats} from "../../../common/app/App.actions";

const mapStateToProps = (state: RootState) => ({
  catCategories: state.app.categories
})

const mapDispatchToProps = {
  toggleSidebar,
  getCats
}

export const CommonLayout = connect(mapStateToProps,mapDispatchToProps)(Self)
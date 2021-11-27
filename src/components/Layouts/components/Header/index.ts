import { connect } from "react-redux";
import { Header as Self } from './Header'
import { toggleSidebar } from "../Sidebar/Sidebar.actions";
import { RootState } from "../../../../store/store";

const mapStateToProps = (state: RootState) => ({
  isSidebarVisible: state.sidebar.isVisible,
});

const mapDispatchToProps = {
  toggleSidebar,
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(Self);
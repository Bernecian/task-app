import {MainPage} from './MainPage'
import {RootState} from "../../store/store";
import {connect} from "react-redux";
import {getCategories, getCats} from "../../common/app/App.actions";

const mapStateToProps = (state: RootState) => ({
  catsCategories: state.app.categories,
  catsData: state.app.catsData,
  catsLoading: state.app.catsLoading,
  category_ids: state.app.category_ids,
});

const mapDispatchToProps = {
  getCategories,
  getCats
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
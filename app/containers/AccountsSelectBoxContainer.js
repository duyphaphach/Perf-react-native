import { connect } from 'react-redux';
import { AccountsSelectBox } from '../components';

const mapStateToProps = ({ accounts }) => ({ accounts });

export default connect(mapStateToProps)(AccountsSelectBox);

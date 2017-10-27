import { connect } from 'react-redux'
import { uniqueQuery } from '../../lib/selectorHelpers'
import { todoById } from '../../state/domains/todo/selectors'
import { completeTodo } from '../../state/domains/todo/actions'

const mapStateToProps = uniqueQuery([todoById], todo => ({ todo }))

const mapDispatchToProps = dispatch => ({
  onClick: (id) => dispatch(completeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)

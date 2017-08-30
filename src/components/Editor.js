import React, { Component } from 'react'
import { connect } from 'react-redux'

import action from '../actions/action'
import { EDITOR_INPUT, SUBMIT_ARTICLE } from '../constants/actionTypes'

const mapStateToProps = state => ({
    editor: state.editor,
    ...state.article
})

const mapDispatchToProps = dispatch => ({
    editorInput: (key, value) => 
        dispatch({type: EDITOR_INPUT, key, value}),
    submitArticle: (payload) =>
        dispatch({type: SUBMIT_ARTICLE, payload})
})

const InputView = props => {
    return (
        <div>
            <form>
                <fieldset>
                    <fieldset className='form-group'>
                        <input onChange={(e) => props._editorInput('title', e.target.value)} value={props.title} className='form-control form-control-lg' type='text' placeholder='Article Title'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <input onChange={(e) => props._editorInput('description', e.target.value)} value={props.description} className='form-control form-control-lg' type='text' placeholder='What is this article about?'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <textarea onChange={(e) => props._editorInput('body', e.target.value)} value={props.body} className='form-control' rows='8' placeholder='Write your article(in markdown)' />
                    </fieldset>
                    <fieldset className='form-group'>
                        <input onChange={(e) => props._editorInput('tagList', e.target.value)} value={props.tagList} className='form-control' type='text' placeholder='Enter tags'/>
                    </fieldset>
                </fieldset>
            </form>
            <button onClick={props._submitArticle} className='btn btn-lg pull-xs-right btn-primary'>Publish Article</button>
        </div>
    )
}

class Editor extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.article && nextProps.article !== this.props.article) {
            nextProps.history.replace(`article/${nextProps.article.slug}`)
        }
    }

    render() {
        const { editorInput, editor, submitArticle } = this.props
        return (
            <div className='editor-page'>
                <div className='container page'>
                    <div className='row'>
                        <div className='col-md-10 offset-md-1 col-xs-12'>
                            <InputView _submitArticle={() => submitArticle(action.Articles.create({...editor}))} _editorInput={editorInput} {...editor}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
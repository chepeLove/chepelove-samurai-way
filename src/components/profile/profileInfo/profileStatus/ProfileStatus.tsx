import React from 'react';

type ProfileStatusType = {
    status: string | null
}

export class ProfileStatus extends React.Component<ProfileStatusType, { editMode: boolean }> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                  <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                  </div>
                }
                {this.state.editMode &&
                  <div>
                    <input type="text" onBlur={this.deactivateEditMode}
                           value={this.props.status ? this.props.status : ''}
                           autoFocus
                    />
                  </div>
                }
            </div>
        );
    }
}

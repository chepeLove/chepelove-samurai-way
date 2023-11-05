import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string | null
    updateUserStatus: (status:string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType, { editMode:boolean,status: string | null}> {


    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{
        editMode: boolean;
        status: string | null
    }>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    state = {
        editMode: false,
        status:this.props.status
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
        this.props.updateUserStatus(this.state.status ?? '')
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                  <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'User has no status'}</span>
                  </div>
                }
                {this.state.editMode &&
                  <div>
                    <input type="text" onBlur={this.deactivateEditMode}
                            value={this.state.status ?? ''}
                           onChange={this.onStatusChange}
                           autoFocus
                    />
                  </div>
                }
            </div>
        );
    }
}

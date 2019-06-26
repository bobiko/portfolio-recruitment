import React, { PureComponent } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import { Field, Control, Input, Textarea } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

class ContactForm extends PureComponent {
    state = {
        email: '',
        name: '',
        title: '',
        comments: '',
    };

    onChangeEvent = ev => {
        console.log(ev);
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    };

    onSubmitEvent = e => {
        e.preventDefault();
        const { name } = this.state;
        alert(`Hej ${name}! Dziekujemy za wiadomość`);
        this.setState({
            email: '',
            name: '',
            title: '',
            comments: '',
        });
    };

    render() {
        const { name, email, title, comments } = this.state;
        return (
            <form onSubmit={this.onSubmitEvent}>
                <Columns>
                    <Columns.Column>
                        <Field>
                            <Control>
                                <Input
                                    placeholder="Your Name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={this.onChangeEvent}
                                />
                            </Control>
                        </Field>
                    </Columns.Column>
                    <Columns.Column>
                        <Field>
                            <Control>
                                <Input
                                    placeholder="Your Email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={this.onChangeEvent}
                                />
                            </Control>
                        </Field>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column>
                        <Field>
                            <Control>
                                <Input
                                    placeholder="Your Title"
                                    name="title"
                                    type="text"
                                    value={title}
                                    onChange={this.onChangeEvent}
                                />
                            </Control>
                        </Field>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column>
                        <Field>
                            <Control>
                                <Textarea
                                    placeholder="Your Comment"
                                    name="comments"
                                    value={comments}
                                    onChange={this.onChangeEvent}
                                />
                            </Control>
                        </Field>
                    </Columns.Column>
                </Columns>
                <Columns className="is-centered">
                    <Columns.Column className="has-text-centered">
                        <Button rounded={false} color="primary" size="medium" type="submit">
                            Send Message
                        </Button>
                    </Columns.Column>
                </Columns>
            </form>
        );
    }
}

export default ContactForm;

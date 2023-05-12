import { Content, Form, ButtonToolbar, Button, Panel, FlexboxGrid} from 'rsuite';
import { useForm } from 'react-hook-form';
import TopBar from '../components/TopBar';


const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return(
    <div className="show-fake-browser login-page" >
      <TopBar />
      <div className='mt-20'>
        <Content >
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={8}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.ControlLabel>Username or email address</Form.ControlLabel>
                    <Form.Control name="username" {...register("usename")}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control {...register("password")} name="password" type="password" autoComplete="off" />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Button appearance="primary" type='submit'>Sign in</Button>
                      <Button appearance="link">Forgot password?</Button>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
        </div>
  </div>
    );
};

export default LoginPage;
import React from 'react'
import {
  Grid,
  Form,
  Input,
  InputNumber,
  Button,
  Checkbox,
} from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import { Project } from '../../models/Project'

const Row = Grid.Row
const Col = Grid.Col
const FormItem = Form.Item
const TextArea = Input.TextArea

const noLabelLayout = {
  wrapperCol: {
    span: 17,
    offset: 7,
  },
}

interface ProjectFormProps {
  cancelEdit: (project: Project) => void
}

function ProjectForm(props: ProjectFormProps) {
  const { cancelEdit } = props

  return (
    <Row>
      <Col span={24}>
        <Form>
          <FormItem label='Project Name'>
            <Input type='text' name='name' placeholder='enter name' />
          </FormItem>
          <FormItem label='Project Description'>
            <TextArea name='description' placeholder='enter description' />
          </FormItem>
          <FormItem
            label='Project Budget'
            rules={[{ type: 'number', required: true }]}
          >
            <InputNumber name='budget' placeholder='enter budget' />
          </FormItem>
          <FormItem
            wrapperCol={{ offset: 0 }}
            field='readme'
            triggerPropName='checked'
            rules={[{ type: 'boolean', true: true }]}
          >
            <Checkbox>I have read the employee manual</Checkbox>
          </FormItem>
          <FormItem wrapperCol={{ offset: 0 }}>
            <Button type='primary'>Save</Button>
            <span />
            <Button type='secondary' onClick={() => cancelEdit(new Project())}>
              cancel
            </Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  )
}

export default ProjectForm

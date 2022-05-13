import { IDialogStateType, useDialog } from '~/components/Dialog/dialog'

export default {
  title: 'Compositions/Dialog'
}

export const Confirm = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup () {
    const dialog = useDialog()

    const handleShowDialog = (type: IDialogStateType) => {
      dialog.confirm({
        type: type,
        description: 'this is description',
        title: 'this is title',
        confirmText: 'ลบ',
        cancelText: 'ยกเลิก'
      }).then(() => {
        window.alert('deleted!')
      })
    }

    return { handleShowDialog }
  },
  template: `
    <div class="flex flex-col max-w-sm space-y-4">
    <Button className="btn-danger" @click="handleShowDialog('danger')">Show confirm danger dialog</Button>
    <Button className="btn-info" @click="handleShowDialog('info')">Show confirm info dialog</Button>
    <Button className="btn-warning" @click="handleShowDialog('warning')">Show confirm warning dialog</Button>
    <Button className="btn-success" @click="handleShowDialog('success')">Show confirm success dialog</Button>
    </div>
  `
})

export const Info = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup () {
    const dialog = useDialog()
    const handleShowDialog = (type: IDialogStateType) => {
      dialog.info({
        type: type,
        description: 'this is description',
        title: 'this is title',
        confirmText: 'OK'
      }).then(() => {
        window.alert('confirmed!')
      })
    }

    return { handleShowDialog }
  },
  template: `
    <div class="flex flex-col space-y-4 max-w-sm">
    <Button className="btn-danger" @click="handleShowDialog('danger')">Show danger dialog</Button>
    <Button className="btn-info" @click="handleShowDialog('info')">Show info dialog</Button>
    <Button className="btn-warning" @click="handleShowDialog('warning')">Show warning dialog</Button>
    <Button className="btn-success" @click="handleShowDialog('success')">Show success dialog</Button>
    </div>
  `
})

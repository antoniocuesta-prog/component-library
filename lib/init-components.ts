// Módulo de inicialización de componentes
// Este módulo se ejecuta una sola vez al importarse por primera vez
// La función registerComponent ya maneja duplicados, así que es seguro ejecutarlo múltiples veces

import { registerComponent } from '@/lib/component-registry'

// Importar todos los componentes disponibles
import { buttonStory } from '@/components/ui/button/Button.stories'
import { inputStory } from '@/components/ui/input/Input.stories'
import { alertStory } from '@/components/ui/alert/Alert.stories'
import { cardStory } from '@/components/ui/card/Card.stories'
import { badgeStory } from '@/components/ui/badge/Badge.stories'
import { textareaStory } from '@/components/ui/textarea/Textarea.stories'
import { selectStory } from '@/components/ui/select/Select.stories'
import { checkboxStory } from '@/components/ui/checkbox/Checkbox.stories'
import { switchStory } from '@/components/ui/switch/Switch.stories'
import { spinnerStory } from '@/components/ui/spinner/Spinner.stories'
import { radioStory } from '@/components/ui/radio/Radio.stories'
import { modalStory } from '@/components/ui/modal/Modal.stories'
import { dropdownStory } from '@/components/ui/dropdown/Dropdown.stories'
import { tabsStory } from '@/components/ui/tabs/Tabs.stories'
import { tooltipStory } from '@/components/ui/tooltip/Tooltip.stories'
import { avatarStory } from '@/components/ui/avatar/Avatar.stories'
import { progressStory } from '@/components/ui/progress/Progress.stories'
import { dividerStory } from '@/components/ui/divider/Divider.stories'
import { breadcrumbStory } from '@/components/ui/breadcrumb/Breadcrumb.stories'
import { paginationStory } from '@/components/ui/pagination/Pagination.stories'
import { accordionStory } from '@/components/ui/accordion/Accordion.stories'
import { tableStory } from '@/components/ui/table/Table.stories'
import { typographyStory } from '@/components/ui/typography/Typography.stories'
import { skeletonStory } from '@/components/ui/skeleton/Skeleton.stories'
import { toastStory } from '@/components/ui/toast/Toast.stories'
import { sliderStory } from '@/components/ui/slider/Slider.stories'
import { fileUploadStory } from '@/components/ui/file-upload/FileUpload.stories'
import { datePickerStory } from '@/components/ui/date-picker/DatePicker.stories'
import { timePickerStory } from '@/components/ui/time-picker/TimePicker.stories'
import { drawerStory } from '@/components/ui/drawer/Drawer.stories'
import { autocompleteStory } from '@/components/ui/autocomplete/Autocomplete.stories'

// Registrar todos los componentes disponibles
// registerComponent ya maneja duplicados, así que es seguro ejecutarlo múltiples veces
registerComponent(buttonStory)
registerComponent(inputStory)
registerComponent(alertStory)
registerComponent(cardStory)
registerComponent(badgeStory)
registerComponent(textareaStory)
registerComponent(selectStory)
registerComponent(checkboxStory)
registerComponent(switchStory)
registerComponent(spinnerStory)
registerComponent(radioStory)
registerComponent(modalStory)
registerComponent(dropdownStory)
registerComponent(tabsStory)
registerComponent(tooltipStory)
registerComponent(avatarStory)
registerComponent(progressStory)
registerComponent(dividerStory)
registerComponent(breadcrumbStory)
registerComponent(paginationStory)
registerComponent(accordionStory)
registerComponent(tableStory)
registerComponent(typographyStory)
registerComponent(skeletonStory)
registerComponent(toastStory)
registerComponent(sliderStory)
registerComponent(fileUploadStory)
registerComponent(datePickerStory)
registerComponent(timePickerStory)
registerComponent(drawerStory)
registerComponent(autocompleteStory)


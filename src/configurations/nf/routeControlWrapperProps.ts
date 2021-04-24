import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
import { SynapseConfig } from 'types/portal-config'

const routeControlWrapperProps : RouteControlWrapperProps = {
  synapseConfig: {} as SynapseConfig,
  customRoutes: ['Initiatives','Studies', 'Datasets', 'Files', 'Publications', 'Tools', 'Hackathons'],
}
export default routeControlWrapperProps

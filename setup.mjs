import { mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const conDir = join(root, 'pkg', 'con')
const fooPath = join(conDir, 'foo.d.ts')

// `con` is a Windows reserved device name — Git cannot checkout it on NTFS.
// Create it at install/test time with Node, which can open the path.
rmSync(conDir, { recursive: true, force: true })
mkdirSync(conDir, { recursive: true })
writeFileSync(fooPath, 'export declare class Foo {}\n', 'utf8')
console.log('created', fooPath)

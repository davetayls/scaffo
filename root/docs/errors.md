
Common Errors and what they mean
================================


Error EPERM
-----------

	Running "requirejs:dist" (requirejs) task
	>> Tracing dependencies for: config
	>> Error: EPERM, operation not permitted '../ui/dist/main.js'
	>>     at Object.fs.unlinkSync (fs.js:582:18)
	<WARN> RequireJS failed. Use --force to continue. </WARN>

	Aborted due to warnings.

This is usually caused if the file main.js is locked or set to read-only.

### TFS
This is easily done in a TFS environment which locks all files unless
they are checked out. Check out the files in the /ui/dist/ folder and
this should resolve the issue.
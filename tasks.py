from invoke import task


@task
def bash(ctx, container="django1"):
    ctx.run(f"docker exec -it isi-{container}-1 bash", pty=True)
